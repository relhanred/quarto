const initLevelOne = () => {
  let initTab = [];
  initTab[0] = [1, 5, 9];
  initTab[1] = [1, 6];
  initTab[2] = [1, 7];
  initTab[3] = [1, 8, 10];
  initTab[4] = [2, 5];
  initTab[5] = [2, 6, 9];
  initTab[6] = [2, 7, 10];
  initTab[7] = [2, 8];
  initTab[8] = [3, 5];
  initTab[9] = [3, 6, 10];
  initTab[10] = [3, 7, 9];
  initTab[11] = [3, 8];
  initTab[12] = [4, 5, 10];
  initTab[13] = [4, 6];
  initTab[14] = [4, 7];
  initTab[15] = [4, 8, 9];
  return initTab;
};

const initLevelTwo = () => {
  let initTab = [];
  initTab[0] = [1, 5, 9, 11];
  initTab[1] = [1, 6, 11, 12];
  initTab[2] = [1, 7, 12, 13];
  initTab[3] = [1, 8, 10, 13];
  initTab[4] = [2, 5, 11, 14];
  initTab[5] = [2, 6, 9, 11, 12, 14, 15];
  initTab[6] = [2, 7, 10, 12, 13, 15, 16];
  initTab[7] = [2, 8, 13, 16];
  initTab[8] = [3, 5, 14, 17];
  initTab[9] = [3, 6, 10, 14, 15, 17, 18];
  initTab[10] = [3, 7, 9, 15, 16, 18, 19];
  initTab[11] = [3, 8, 16, 19];
  initTab[12] = [4, 5, 10, 17];
  initTab[13] = [4, 6, 17, 18];
  initTab[14] = [4, 7, 18, 19];
  initTab[15] = [4, 8, 9, 19];
  return initTab;
};

const initLevelThree = () => {
  let initTab = [];
  initTab[0] = [1, 5, 9, 11, 20];
  initTab[1] = [1, 6, 11, 12, 21];
  initTab[2] = [1, 7, 12, 13, 20];
  initTab[3] = [1, 8, 10, 13, 21];
  initTab[4] = [2, 5, 11, 14, 22];
  initTab[5] = [2, 6, 9, 11, 12, 14, 15, 23];
  initTab[6] = [2, 7, 10, 12, 13, 15, 16, 22];
  initTab[7] = [2, 8, 13, 16, 23];
  initTab[8] = [3, 5, 14, 17, 20];
  initTab[9] = [3, 6, 10, 14, 15, 17, 18, 21];
  initTab[10] = [3, 7, 9, 15, 16, 18, 19, 20];
  initTab[11] = [3, 8, 16, 19, 21];
  initTab[12] = [4, 5, 10, 17, 22];
  initTab[13] = [4, 6, 17, 18, 23];
  initTab[14] = [4, 7, 18, 19, 22];
  initTab[15] = [4, 8, 9, 19, 23];
  return initTab;
};

const initLevelFour = () => {
  let initTab = [];
  initTab[0] = [1, 5, 9, 11, 20];
  initTab[1] = [1, 6, 11, 12, 21, 24];
  initTab[2] = [1, 7, 12, 13, 20, 25, 28];
  initTab[3] = [1, 8, 10, 13, 21];
  initTab[4] = [2, 5, 11, 14, 22, 24, 28];
  initTab[5] = [2, 6, 9, 11, 12, 14, 15, 23, 25, 26];
  initTab[6] = [2, 7, 10, 12, 13, 15, 16, 22, 24, 27];
  initTab[7] = [2, 8, 13, 16, 23, 25];
  initTab[8] = [3, 5, 14, 17, 20, 26];
  initTab[9] = [3, 6, 10, 14, 15, 17, 18, 21, 24, 27];
  initTab[10] = [3, 7, 9, 15, 16, 18, 19, 20, 25, 26];
  initTab[11] = [3, 8, 16, 19, 21, 27, 28];
  initTab[12] = [4, 5, 10, 17, 22];
  initTab[13] = [4, 6, 17, 18, 23, 26, 28];
  initTab[14] = [4, 7, 18, 19, 22, 27];
  initTab[15] = [4, 8, 9, 19, 23];
  return initTab;
};

export const maxPerLevel = [11, 20, 24, 29];

export const initLevelTab = (index) => {
  let tab = [];
  switch (index) {
    case 0:
      tab = initLevelOne();
      break;
    case 1:
      tab = initLevelTwo();
      break;
    case 2:
      tab = initLevelThree();
      break;
    case 3:
      tab = initLevelFour();
      break;
    default:
      break;
  }
  return tab;
};
