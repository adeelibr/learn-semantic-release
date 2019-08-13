const darthVaderDialogues = [
  "No, I am your father.",
  "I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new empire.",
  "I am altering the deal. Pray I don’t alter it any further.",
  "Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force… I find your lack of faith disturbing.",
  "Just for once let me look on you with my own eyes… You were right. You were right about me. Tell your sister you were right."
];

export const onGetARandomVaderQuote = () => {
  return darthVaderDialogues[Math.floor(Math.random() * darthVaderDialogues.length)];
};

export const onReveailDarthVader = () => `Anakin Skywalker`;