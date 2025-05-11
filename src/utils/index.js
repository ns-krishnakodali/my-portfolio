export const cleanString = (str) => {
  return str.replace(/[.\s]/g, '').toLowerCase();
};

export const removeNonAlphabets = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z-]/g, '').toLowerCase();
};

export const formatText = (text) => text.split(/(<[A-Za-z]+>)/g).filter(Boolean);

export const formatPhoneNumber = (number) => {
  const numbers = number.replace(/\D/g, '');

  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  }
};
