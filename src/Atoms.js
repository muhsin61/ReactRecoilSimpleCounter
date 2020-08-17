import { atom } from 'recoil';

export const simpleCounter = atom({
  key: 'counter',
  default: 0
})