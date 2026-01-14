// Theme management for automatic light/dark mode based on system setting

const Theme = {
  // Initialize theme system
  init() {
    this.applySystemTheme();
    this.watchSystemTheme();
  },

  // Apply theme based on system preference
  applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  },

  // Watch for system theme changes
  watchSystemTheme() {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Modern browsers support addEventListener
    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      });
    } else {
      // Fallback for older browsers
      darkModeQuery.addListener((e) => {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      });
    }
  }
};

// Initialize theme as early as possible to prevent flash
Theme.init();
