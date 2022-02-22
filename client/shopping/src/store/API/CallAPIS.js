import { location_local } from '../../utils/ENV';

export const getDataRequest = url => {
  return new Promise((resolve, reject) =>
  fetch(location_local + url).then((response) => response.json())
  .then((response, err) => {
    if (response) resolve(response);
    reject('Something Went Wrong..');
  }, (err)=> reject(err)));
};
