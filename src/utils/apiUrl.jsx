export const apiUrl =
  process.env.NODE_ENV === "dev"
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;
