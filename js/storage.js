// Storage management for Canadian Citizenship Test DOJO
// Uses localStorage with export/import capability

const STORAGE_KEY = 'citizenship-test-dojo';

const Storage = {
  // Get all stored data
  getData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return this.getEmptyData();
    }
    return JSON.parse(data);
  },

  // Initialize empty data structure
  getEmptyData() {
    return {
      sessions: [],
      statistics: {
        totalSessions: 0,
        averageScore: 0,
        bestScore: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        lastSessionDate: null
      },
      weakQuestions: {}
      // weakQuestions format: { questionId: { wrongCount, lastWrong, correctStreak } }
    };
  },

  // Save a completed session
  saveSession(sessionResult) {
    const data = this.getData();

    // Add session with timestamp
    const session = {
      ...sessionResult,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    data.sessions.push(session);

    // Update statistics
    this.updateStatistics(data);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    return session;
  },

  // Update cumulative statistics
  updateStatistics(data) {
    const sessions = data.sessions;
    if (sessions.length === 0) {
      data.statistics = this.getEmptyData().statistics;
      return;
    }

    const scores = sessions.map(s => s.score);
    const totalCorrect = sessions.reduce((sum, s) => sum + s.correctAnswers, 0);
    const totalQuestions = sessions.reduce((sum, s) => sum + s.totalQuestions, 0);

    data.statistics = {
      totalSessions: sessions.length,
      averageScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      bestScore: Math.max(...scores),
      totalQuestionsAnswered: totalQuestions,
      totalCorrect: totalCorrect,
      lastSessionDate: sessions[sessions.length - 1].timestamp
    };
  },

  // Get session history
  getHistory() {
    return this.getData().sessions;
  },

  // Get statistics
  getStatistics() {
    return this.getData().statistics;
  },

  // Get recent sessions (last n)
  getRecentSessions(count = 10) {
    const sessions = this.getData().sessions;
    return sessions.slice(-count).reverse();
  },

  // Export data as downloadable JSON file
  exportToFile() {
    const data = this.getData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `citizenship-test-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import data from JSON file
  importFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);

          // Validate structure
          if (!data.sessions || !Array.isArray(data.sessions)) {
            throw new Error('Invalid file format: missing sessions array');
          }

          // Save imported data
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  },

  // Clear all data
  clearAll() {
    localStorage.removeItem(STORAGE_KEY);
  },

  // ========== Weak Questions Tracking ==========

  // Mark a question as answered incorrectly
  markWrong(questionId) {
    const data = this.getData();
    if (!data.weakQuestions) data.weakQuestions = {};

    const id = String(questionId);
    if (data.weakQuestions[id]) {
      data.weakQuestions[id].wrongCount++;
      data.weakQuestions[id].lastWrong = new Date().toISOString();
      data.weakQuestions[id].correctStreak = 0; // Reset streak on wrong answer
    } else {
      data.weakQuestions[id] = {
        wrongCount: 1,
        lastWrong: new Date().toISOString(),
        correctStreak: 0
      };
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  // Mark a question as answered correctly
  // Removes from weak list after 2 consecutive correct answers
  markCorrect(questionId) {
    const data = this.getData();
    if (!data.weakQuestions) data.weakQuestions = {};

    const id = String(questionId);
    if (data.weakQuestions[id]) {
      data.weakQuestions[id].correctStreak++;

      // Remove from weak list if answered correctly 2 times
      if (data.weakQuestions[id].correctStreak >= 2) {
        delete data.weakQuestions[id];
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    // If not in weak list, nothing to do
  },

  // Get list of weak question IDs
  getWeakQuestionIds() {
    const data = this.getData();
    if (!data.weakQuestions) return [];
    return Object.keys(data.weakQuestions).map(id => parseInt(id, 10));
  },

  // Get count of weak questions
  getWeakQuestionCount() {
    return this.getWeakQuestionIds().length;
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Storage;
}
