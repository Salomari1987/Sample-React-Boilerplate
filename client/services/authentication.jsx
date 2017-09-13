import axios from 'axios';
import getConfig from 'config/axios_configs';
var config = getConfig(false);

var login = function (data) {
  return axios.post(
    config.baseURL + '/api/login', data
  )
    .then(function (res) {
      return res;
    });
};

var setUser = function (token) {
  window.localStorage.setItem('token', token);
};

var getUser = () => {
  return axios.get(
    config.baseURL + '/api/users/2'
  )
  .then((res) => {
    return res.data;
  })
}

var isAuthenticated = function () {
  return !!window.localStorage.getItem('token');
};

var getToken = function () {
  return window.localStorage.getItem('token');
};

var logout = function () {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
};

export default {
  isAuthenticated,
  setUser,
  logout,
  login,
  getUser,
  getToken
};
