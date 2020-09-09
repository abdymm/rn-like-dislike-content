const generateType = (type) => ({
  ATTEMPT: `${type}_ATTEMPT`,
  SUCCESS: `${type}_SUCCESS`,
  FAILED: `${type}_FAILED`,
});

export const FETCH_PICTURES = generateType(`FETCH_PICTURES`);
export const LIKE_PICTURES = generateType(`LIKE_PICTURES`);
