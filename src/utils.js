import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomNumber = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};

export const generateDate = (from, to = 0) => {
  const yearsGap = getRandomInteger(-from, to);
  const monthsGap = getRandomInteger(-6, 6);
  const daysGap = getRandomInteger(-15, 15);

  return dayjs().add(yearsGap, 'year').add(monthsGap, 'month').add(daysGap, 'day').toDate();
};

export const generateUniquesNumbers = (count, max) => {
  const arrNumbers = [];
  while(arrNumbers.length < count){
    const r = Math.floor(Math.random() * (max - 1)) + 1;
    if(arrNumbers.indexOf(r) === -1) arrNumbers.push(r);
  }
  return arrNumbers;
};

export const generateValue = (arr = [], number = 1) => {
  if (arr.length === 0){
    return '';
  }

  if (number > 1) {
    const randomCount = getRandomInteger(1, number);

    const arrNumbers = generateUniquesNumbers(randomCount, arr.length);

    return arrNumbers.map((number) => arr[number]);
  }

  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export const minutesToHm = (minutes) => {
  if (!minutes) return '';
  const h = Math.floor(minutes/60);
  const min = minutes % 60;
  return `${h}h ${min}m`;
};
