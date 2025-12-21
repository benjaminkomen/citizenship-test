# Canadian Citizenship Test Practice App

A local web application to help you prepare for the Canadian citizenship test through interactive practice quizzes. No
server required — runs entirely in your browser.

## 🌐 Try It Now

**[Launch the app →](https://benjaminkomen.github.io/citizenship-test/)**

Practice for your Canadian citizenship test right in your browser — no installation needed.

## Features

- **248 practice questions** covering all 11 chapters of the Discover Canada study guide
- **Smart question selection** — prioritizes questions you've previously answered incorrectly
- **Spaced repetition** — weak questions are removed from the "needs practice" list after 2 consecutive correct answers
- **Immediate feedback** with detailed explanations for each question
- **75% pass threshold** matching the actual citizenship test requirement
- **Progress tracking** saved locally in your browser (session history, scores, statistics)
- **Export/import progress** as JSON for backup or transfer between devices
- **No internet required** after initial download

## Question Topics

Questions cover all chapters from the official Discover Canada guide:

1. Rights and Responsibilities
2. Who We Are (founding peoples)
3. Canada's History
4. Modern Canada
5. How Canadians Govern Themselves
6. Federal Elections
7. Canadian Symbols
8. Canada's Regions
9. The Justice System
10. The Oath of Citizenship
11. Canada's Economy

## How to Use

1. Open `index.html` in your web browser
2. Click "Start Quiz" to begin a 20-question practice session
3. Answer the multiple choice questions
4. See your results and review answers with explanations
5. Track your progress over time in the Progress screen

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (ES6+)
- No frameworks or dependencies
- Browser localStorage for data persistence
- Single-page application architecture

## Project Structure

```
├── index.html          # Main HTML with all UI screens
├── css/
│   └── styles.css      # Styling with Canadian red theme
├── js/
│   ├── questions.js    # Question bank (160 questions)
│   ├── storage.js      # localStorage management & weak question tracking
│   └── app.js          # Main application logic
├── summary.md          # Personal summary of the study guide
└── discover.md         # Full transcription of Discover Canada guide
```

## Study Materials

- [summary.md](summary.md) — Personal summary of the Discover Canada study guide
- [discover.md](discover.md) — Full text of the Discover Canada guide

## See Also

- [Discover Canada (official guide)](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html)
- [Discover Canada PDF](https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/pub/discover.pdf)
- [APNA Toronto Practice Tests](https://www.apnatoronto.com/canadian-citizenship-test/) — free alternative practice
  tests