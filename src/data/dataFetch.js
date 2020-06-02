import mockData from './localData';

const url = 'https://danyu.github.io/dinopediadata/dinos.json';
export const MODE = {
  local: 0,
  remote: 1
}
export function getDinoList(mode = MODE.local) {
  if (mode === MODE.local) {
    return new Promise((resolve) => resolve(mockData));
  }
  return window.fetch(url).then(response => response.json());
}