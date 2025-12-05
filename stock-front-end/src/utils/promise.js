import { reduce } from 'lodash';

export const resolveLoop = (arr, doFunction) => reduce(
  arr,
  (promise, item, index) => promise.then(
    () => new Promise((resolve, reject) => {
      doFunction(item, index, resolve, reject);
    }),
  ),
  Promise.resolve(),
);