export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/2c17db1a-f126-40bd-b221-2b0621a73467/CA-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
