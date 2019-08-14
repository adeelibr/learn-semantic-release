const obiwanKenobiDialogues = [
  'Luke, you’re going to find that many of the truths we cling to depend greatly on our own point of view.” / “The truth is often what we make of it; you heard what you wanted to hear, believed what you wanted to believe.',
  'Be mindful of your thoughts, Anakin, they betray you.',
  'So uncivilized.',
  'Only a Sith deals in absolutes.',
  'If you strike me down, I shall become more powerful than you can possibly imagine.'
];

export const onGetARandomObiwanQuote = () => {
  return obiwanKenobiDialogues[Math.floor(Math.random() * obiwanKenobiDialogues.length)];
};

export const onGetForceMotivation = () => {
  console.log('May the force be with you.');
};

