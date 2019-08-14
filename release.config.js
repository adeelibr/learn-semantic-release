module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer', // to analyze commits & assign semantic vers accordingly
    '@semantic-release/error',
    '@semantic-release/github',    
    '@semantic-release/release-notes-generator', // to generate changelog content
    '@semantic-release/changelog', // plugin to create or update a changelog file
    '@semantic-release/git',
  ],
  branch: 'master',
};