//take it from the environment file
export const URL_PREFIX_ENV = process.env.REACT_APP_LOCAL
  ? process.env.REACT_APP_LOCAL_PREFIX
  : process.env.REACT_APP_PROD_PREFIX;
