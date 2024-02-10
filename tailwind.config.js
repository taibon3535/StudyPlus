const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}'),
    // Add other directories as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};