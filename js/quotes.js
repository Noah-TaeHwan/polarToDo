const quotes = [
  {
    quote: `Nothing astonishes men so much as common sense and plain dealing.`,
    author: `Ralph Waldo Emerson`,
  },
  {
    quote: `For myself I am an optimist - it does not seem to be much use being anything else.`,
    author: `Sir Winston Churchill`,
  },
  {
    quote: `Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy`,
    author: `Norman Vincent Peale`,
  },
  {
    quote: `Like anyone else, there are days I feel beautiful and days I don't, and when I don't, I do something about it.`,
    author: `Cheryl Tiegs
`,
  },
  {
    quote: `The Chinese use two brush strokes to write the word 'crisis.' One brush stroke stands for danger; the other for opportunity. In a crisis, be aware of the danger - but recognize the opportunity.`,
    author: `John F. Kennedy`,
  },
  {
    quote: `It's only when the tide goes out that you discover who's been swimming naked.`,
    author: `Warren Buffett`,
  },
  {
    quote: `One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another.`,
    author: `Rene Descartes`,
  },
  {
    quote: `We must use time as a tool, not as a crutch.`,
    author: `John F. Kennedy`,
  },
  {
    quote: `We must believe in luck. For how else can we explain the success of those we don't like?`,
    author: `Jean Cocteau`,
  },
  {
    quote: `The way to gain a good reputation is to endeavor to be what you desire to appear.`,
    author: `Socrates`,
  },
  {
    quote: `Is there anything worse than being blind? Yes, a man with sight and no vision.`,
    author: `Helen Keller`,
  },
  {
    quote: `We simply attempt to be fearful when others are greedy and to be greedy only when others are fearful.`,
    author: `Warren Buffett`,
  },
  {
    quote: `I'm afraid I'm being an awful nuisance.`,
    author: `Edith Sitwell`,
  },
  {
    quote: `War is much too serious a matter to be entrusted to the military.`,
    author: `Georges Clemenceau`,
  },
  {
    quote: `All animals are equal but some animals are more equal than others.`,
    author: `George Orwell`,
  },
  {
    quote: `There is only one good, knowledge, and one evil, ignorance.`,
    author: `Socrates`,
  },
  {
    quote: `A wise man should consider that health is the greatest of human blessings, and learn how by his own thought to derive benefit from his illnesses.`,
    author: `Hippocrates`,
  },
  {
    quote: `What's gone and what's past help Should be past grief.`,
    author: `William Shakespeare`,
  },
  {
    quote: `Actions have consequences...first rule of life. And the second rule is this - you are the only one responsible for your own actions.`,
    author: `Holly Lisle`,
  },
  {
    quote: `A good plan, violently executed now, is better than a perfect plan next week.`,
    author: `George S. Patton`,
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
