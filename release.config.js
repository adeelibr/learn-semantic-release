module.exports = {
  repositoryUrl: 'https://github.com/adeelibr/learn-semantic-release',
  plugins: [
    '@semantic-release/commit-analyzer', // to analyze commits & assign semantic vers accordingly
    '@semantic-release/release-notes-generator',  // to create/update changelog content
    '@semantic-release/changelog', // plugin to create/update a changelog file
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  branch: 'master',
};