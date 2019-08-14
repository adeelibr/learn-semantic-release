module.exports = {
  plugins: [
    // to analyze commits & assign semantic vers accordingly
    ['@semantic-release/commit-analyzer', {
      preset: 'atom',
    }],
    // to create/update changelog content
    ['@semantic-release/release-notes-generator', {
      preset: 'atom',
    }],
    '@semantic-release/changelog', // plugin to create/update a changelog file
    '@semantic-release/git',
  ],
  branch: 'master',
};