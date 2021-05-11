import {
  generateDate,
  generateValue,
  getRandomInteger,
  generateUniquesNumbers
} from '../utils';

const comments = [
  'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'Interesting setting and a good cast',
  'Booooooooooring',
  'Very good film',
  'Almost two hours? Seriously?',
];

const commentAuthors = [
  'Tim Macoveev',
  'Ilya Oreilly',
  'John Johnson',
];

const emotions = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

export const generateComments = () => {
  const countComments = getRandomInteger(0, 5);
  const ids = generateUniquesNumbers(countComments, 100);
  return  ids.map((id) => ({
    id: id,
    author: generateValue(commentAuthors),
    comment: generateValue(comments),
    date: generateDate(10),
    emotion: generateValue(emotions),
  }));
};
