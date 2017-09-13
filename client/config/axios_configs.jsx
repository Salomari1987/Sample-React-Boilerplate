import auth from 'services/authentication';

var getConfig = (authorized = true) => {
  return {
    baseURL: 'https://reqres.in',
  };
};

export default getConfig;
