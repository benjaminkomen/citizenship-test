// Main application logic for Canadian Citizenship Test DOJO

const App = {
  // Quiz state
  state: {
    currentScreen: 'start',
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    startTime: null,
    questionsPerQuiz: 20
  },

  // Initialize the app
  init() {
    this.bindEvents();
    this.showScreen('start');
    this.updateStartScreen();
  },

  // Bind event listeners
  bindEvents() {
    // Start screen buttons
    document.getElementById('start-quiz-btn').addEventListener('click', () => this.startQuiz());
    document.getElementById('view-progress-btn').addEventListener('click', () => this.showScreen('progress'));

    // Question screen
    document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());

    // Results screen
    document.getElementById('try-again-btn').addEventListener('click', () => this.startQuiz());
    document.getElementById('review-btn').addEventListener('click', () => this.showScreen('review'));
    document.getElementById('results-progress-btn').addEventListener('click', () => this.showScreen('progress'));

    // Review screen
    document.getElementById('review-back-btn').addEventListener('click', () => this.showScreen('results'));

    // Progress screen
    document.getElementById('progress-back-btn').addEventListener('click', () => this.showScreen('start'));
    document.getElementById('export-btn').addEventListener('click', () => Storage.exportToFile());
    document.getElementById('import-btn').addEventListener('click', () => document.getElementById('import-file').click());
    document.getElementById('import-file').addEventListener('change', (e) => this.handleImport(e));
  },

  // Show a specific screen
  showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${screenName}-screen`).classList.add('active');
    this.state.currentScreen = screenName;

    // Update screen content
    if (screenName === 'progress') {
      this.updateProgressScreen();
    } else if (screenName === 'start') {
      this.updateStartScreen();
    }
  },

  // Update start screen with last score
  updateStartScreen() {
    const stats = Storage.getStatistics();
    const lastScoreEl = document.getElementById('last-score');
    const weakCount = Storage.getWeakQuestionCount();

    if (stats.totalSessions > 0) {
      const recent = Storage.getRecentSessions(1)[0];
      let html = `
        <p>Last score: <strong>${recent.score}%</strong> (${recent.correctAnswers}/${recent.totalQuestions})</p>
        <p>Total sessions: ${stats.totalSessions} | Best: ${stats.bestScore}%</p>
      `;
      if (weakCount > 0) {
        html += `<p class="weak-notice">You have <strong>${weakCount}</strong> question${weakCount > 1 ? 's' : ''} to review</p>`;
      }
      lastScoreEl.innerHTML = html;
    } else {
      lastScoreEl.innerHTML = '<p>No previous sessions. Start your first quiz!</p>';
    }

    // Update question count based on available questions
    const availableQuestions = Math.min(this.state.questionsPerQuiz, QUESTIONS.length);
    document.getElementById('quiz-info').textContent =
      `${availableQuestions} questions | 75% to pass`;
  },

  // Start a new quiz
  startQuiz() {
    const numQuestions = Math.min(this.state.questionsPerQuiz, QUESTIONS.length);

    // Prioritize weak questions
    const weakIds = Storage.getWeakQuestionIds();
    const weakQuestions = QUESTIONS.filter(q => weakIds.includes(q.id));
    const otherQuestions = QUESTIONS.filter(q => !weakIds.includes(q.id));

    // Take up to half from weak questions, rest random
    const numWeak = Math.min(weakQuestions.length, Math.floor(numQuestions / 2));
    const numOther = numQuestions - numWeak;

    const selected = [
      ...this.shuffleArray([...weakQuestions]).slice(0, numWeak),
      ...this.shuffleArray([...otherQuestions]).slice(0, numOther)
    ];

    this.state.questions = this.shuffleArray(selected);
    this.state.currentQuestionIndex = 0;
    this.state.answers = [];
    this.state.startTime = Date.now();

    this.showScreen('question');
    this.displayQuestion();
  },

  // Display current question
  displayQuestion() {
    const question = this.state.questions[this.state.currentQuestionIndex];
    const total = this.state.questions.length;
    const current = this.state.currentQuestionIndex + 1;

    // Update progress
    document.getElementById('question-progress').textContent = `Question ${current} of ${total}`;
    document.getElementById('progress-bar-fill').style.width = `${(current / total) * 100}%`;

    // Update question
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-chapter').textContent = question.chapter;

    // Update options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => this.selectAnswer(index));
      optionsContainer.appendChild(btn);
    });

    // Reset feedback area
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
  },

  // Handle answer selection
  selectAnswer(selectedIndex) {
    const question = this.state.questions[this.state.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctAnswer;

    // Store answer
    this.state.answers.push({
      questionId: question.id,
      selectedIndex,
      correctIndex: question.correctAnswer,
      isCorrect
    });

    // Highlight selected and correct answers
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, index) => {
      btn.disabled = true;
      if (index === question.correctAnswer) {
        btn.classList.add('correct');
      } else if (index === selectedIndex && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong>
      <p>${question.explanation}</p>
    `;

    // Show next button
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('next-btn').textContent =
      this.state.currentQuestionIndex < this.state.questions.length - 1 ? 'Next Question' : 'See Results';
  },

  // Move to next question or show results
  nextQuestion() {
    if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
      this.state.currentQuestionIndex++;
      this.displayQuestion();
    } else {
      this.finishQuiz();
    }
  },

  // Finish quiz and show results
  finishQuiz() {
    const correctAnswers = this.state.answers.filter(a => a.isCorrect).length;
    const totalQuestions = this.state.questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= 75;
    const timeSpent = Math.round((Date.now() - this.state.startTime) / 1000);

    // Save session
    const sessionResult = {
      totalQuestions,
      correctAnswers,
      score,
      passed,
      timeSpent,
      answers: this.state.answers
    };
    Storage.saveSession(sessionResult);

    // Update weak questions tracking
    this.state.answers.forEach(answer => {
      if (answer.isCorrect) {
        Storage.markCorrect(answer.questionId);
      } else {
        Storage.markWrong(answer.questionId);
      }
    });

    // Update results screen
    document.getElementById('score-value').textContent = `${score}%`;
    document.getElementById('score-circle').className = `score-circle ${passed ? 'pass' : 'fail'}`;
    document.getElementById('pass-fail').textContent = passed ? 'PASSED' : 'FAILED';
    document.getElementById('pass-fail').className = `pass-fail ${passed ? 'pass' : 'fail'}`;
    document.getElementById('correct-count').textContent = `${correctAnswers} of ${totalQuestions} correct`;
    document.getElementById('time-spent').textContent = `Time: ${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`;

    this.showScreen('results');
  },

  // Update progress screen
  updateProgressScreen() {
    const stats = Storage.getStatistics();
    const sessions = Storage.getRecentSessions(10);

    // Update statistics
    document.getElementById('stat-sessions').textContent = stats.totalSessions;
    document.getElementById('stat-average').textContent = stats.totalSessions > 0 ? `${stats.averageScore}%` : '-';
    document.getElementById('stat-best').textContent = stats.totalSessions > 0 ? `${stats.bestScore}%` : '-';
    document.getElementById('stat-questions').textContent = stats.totalQuestionsAnswered;

    // Update history table
    const historyBody = document.getElementById('history-body');
    if (sessions.length === 0) {
      historyBody.innerHTML = '<tr><td colspan="4">No sessions yet. Start your first quiz!</td></tr>';
    } else {
      historyBody.innerHTML = sessions.map(session => {
        const date = new Date(session.timestamp);
        return `
          <tr class="${session.passed ? 'pass' : 'fail'}">
            <td>${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
            <td>${session.score}%</td>
            <td>${session.correctAnswers}/${session.totalQuestions}</td>
            <td>${session.passed ? 'Pass' : 'Fail'}</td>
          </tr>
        `;
      }).join('');
    }
  },

  // Handle file import
  async handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await Storage.importFromFile(file);
      alert('Progress imported successfully!');
      this.updateProgressScreen();
    } catch (error) {
      alert('Failed to import: ' + error.message);
    }

    // Reset file input
    event.target.value = '';
  },

  // Utility: Shuffle array (Fisher-Yates)
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
