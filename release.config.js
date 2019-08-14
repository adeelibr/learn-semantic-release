module.exports = {
  plugins: [
    // to analyze commits & assign semantic vers accordingly
    ['@semantic-release/commit-analyzer', {
      presets: 'atom',
    }],
    // to create/update changelog content
    ['@semantic-release/release-notes-generator', {
      preset: 'atom',
    }],
    '@semantic-release/error',
    '@semantic-release/github',
    '@semantic-release/changelog', // plugin to create or update a changelog file
    '@semantic-release/git',
  ],
  branch: 'master',
};