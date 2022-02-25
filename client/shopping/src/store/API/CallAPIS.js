import { location_local } from '../../utils/ENV';

export const getDataRequest = url => {
  return new Promise((resolve, reject) =>
  fetch(location_local + url).then((response) => response.json())
  .then((response, err) => {
    if (response) resolve(response);
    reject('Something Went Wrong..');
  }, (err)=> reject(err)));
};

export const postDataRequest = (url, request) => {
  const requestOptions = {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
};
  return new Promise((resolve, reject) =>
  fetch(location_local + url, requestOptions).then((response) => response.json())
  .then((response, err) => {
    if (response) resolve(response);
    reject('Something Went Wrong..');
  }, (err)=> reject(err)));
};
