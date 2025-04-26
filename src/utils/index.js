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
