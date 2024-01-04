const quotes = [
  {
    quote: `The pursuit of happiness is a most ridiculous phrase; if you pursue happiness you'll never find it.`,
    author: `C. P. Snow`,
  },
  {
    quote: `If you have a harem of 40 women, you never get to know any of them very well.`,
    author: `Warren Buffett`,
  },
  {
    quote: `You go back. You search for what made you happy when you were smaller. We are all grown up children, really... So one should go back and search for what was loved and found to be real.`,
    author: `Audrey Hepburn`,
  },
  {
    quote: `If we are bound to forgive an enemy, we are not bound to trust him.`,
    author: `Baruch Spinoza`,
  },
  {
    quote: `My problem lies in reconciling my gross habits with my net income.`,
    author: `Errol Flynn`,
  },
  {
    quote: `Our own physical body possesses a wisdom which we who inhabit the body lack.`,
    author: `Henry Miller`,
  },
  {
    quote: `The superior man is satisfied and composed; the mean man is always full of distress.`,
    author: `Confucius`,
  },
  {
    quote: `Death is the enemy. I spent 10 years of my life singlemindedly studying, practicing, fighting hand to hand in close quarters to defeat the enemy, to send him back bloodied and humble and I am not going to roll over and surrender.`,
    author: `Diane Frolov`,
  },
  {
    quote: `I would warn you that I do not attribute to nature either beauty or deformity, order or confusion. Only in relation to our imagination can things be called beautiful or ugly, well-ordered or confused.`,
    author: `Baruch Spinoza`,
  },
  {
    quote: `Imagination is more important than knowledge.`,
    author: `Albert Einstein`,
  },
  {
    quote: `Love is or it ain't. Thin love ain't love at all.`,
    author: `Toni Morrison`,
  },
  {
    quote: `Those who would give up essential liberty to purchase a little temporary safety deserve neither liberty nor safety.`,
    author: `Benjamin Franklin`,
  },
  {
    quote: `The worst crime is faking it.`,
    author: `Kurt Cobain`,
  },
  {
    quote: `Make hunger thy (your) sauce, as a medicine for health.`,
    author: `Thomas Tusser`,
  },
  {
    quote: `It is through creating, not possessing, that life is revealed.`,
    author: `Vida D. Scudder`,
  },
  {
    quote: `Look for the woman in the dress. If there is no woman, there is no dress.`,
    author: `Gabriel Coco Chanel`,
  },
  {
    quote: `Love the moment, and the energy of that moment will spread beyond all boundaries.`,
    author: `Corita Kent`,
  },
  {
    quote: `All cats are gray in the dark.`,
    author: `Benjamin Franklin`,
  },
  {
    quote: `Baseball is 90% mental, the other portion is physical.`,
    author: `Yogi Berra`,
  },
];

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
