module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer', //  plugin to analyze commits & assign semantic vers accordingly
    '@semantic-release/release-notes-generator', // plugin to generate changelog content
    '@semantic-release/changelog', // plugin to create or update a changelog file
    '@semantic-release/git',
  ],
  branch: 'master',
};