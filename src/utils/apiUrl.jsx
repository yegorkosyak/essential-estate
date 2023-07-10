export const apiUrl =
  process.env.NODE_ENV === "prod"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
