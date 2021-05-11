import {
  generateDate,
  generateValue,
  getRandomInteger,
  getRandomNumber,
  minutesToHm
} from '../utils';
import {generateComments} from './comments';

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const titles = [
  'Popeye the sailor',
  'Made for each other',
  'The dance of life',
  'John Wayne "Sagebrush trail"',
  'Santa claus',
  'The man with golden the arm',
  'The great flamarion',
];

const alternativeTitles = [
  'Popeye the sailor',
  'Made for each other',
  'The dance of life',
  'John Wayne "Sagebrush trail"',
  'Santa claus',
  'The man with golden the arm',
  'The great flamarion',
];

const directors = [
  'Takeshi Kitano',
  'Robert Zimeckis',
  'Marc Abraham',
  'Hugh Wilson',
  'David Zucker',
];

const writers = [
  'Anne Wigton',
  'Heinz Herald',
  'Richard Weil',
  'Asghar Farhadi',
  'Eric Roth',
  'Aaron Sorkin',
  'Woody Allen',
  'Chang-dong Lee',
  'Richard Linklater',
  'Lars von Trier',
];

const actors = [
  'Dwayne Johnson',
  'Leonardo DiCaprio',
  'Johnny Depp',
  'Tom Cruise',
  'Will Smith',
  'Robin Williams',
  'Mark Wahlberg',
  'Vin Diesel',
  'Brad Pitt',
  'Matthew McConaughey',
];

const countries = [
  'USA',
  'Russia',
  'England',
  'France',
  'Finland',
];

const genres = [
  'Action',
  'Adventure',
  'Musical',
  'Comedy',
  'Drama',
  'Fantasy',
];

const ages = [0, 6, 12, 14, 16, 18];

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const generateDesctiption = (description) => {
  const descriptionArr = description.split('.');
  descriptionArr.pop();
  return generateValue(descriptionArr, 5).join('.') + '.';
};

export const shortDescription = (description) => {
  if (description.length > 139) {
    description = description.slice(0, 140) + '...';
  }
  return description;
};

export const generateFilm = (index) => {
  const commentsFilm = generateComments();
  return {
    id: index + 1,
    comments: commentsFilm,
    film_info: {
      title: generateValue(titles),
      alternative_title: generateValue(alternativeTitles),
      total_rating: getRandomNumber(3, 9),
      poster: `images/posters/${generateValue(posters)}`,
      age_rating: generateValue(ages),
      director: generateValue(directors),
      writers: generateValue(writers, 3).join(', '),
      actors: generateValue(actors, 5).join(', '),
      release: {
        date: generateDate(100),
        release_country: generateValue(countries),
      },
      runtime: minutesToHm(getRandomInteger(85, 181)),
      genre: generateValue(genres, 3),
      description: generateDesctiption(description),
    },
    user_details: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      already_watched: Boolean(getRandomInteger(0, 1)),
      watching_date: generateDate(10),
      favorite: Boolean(getRandomInteger(0, 1)),
    },
  };
};
