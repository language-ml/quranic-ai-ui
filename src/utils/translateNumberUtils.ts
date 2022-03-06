export const toPersianNumber = (num: number | string) => {
  const persian = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹',
  } as any;
  num = num.toString();
  const len = num.length;
  let converted = '';
  for (let i = 0; i < len; i++) {
    converted += persian[num[i]] || num[i];
  }
  return converted;
};

export const toArabicNumber = (num: number | string) => {
  const persian = {
    0: '٠',
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
  } as any;
  num = num.toString();
  const len = num.length;
  let converted = '';
  for (let i = 0; i < len; i++) {
    converted += persian[num[i]] || num[i];
  }
  return converted;
};

export const toEnglishNumber = (num: number | string) => {
  const english = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  } as any;
  num = num.toString();
  const len = num.length;
  let converted = '';
  for (let i = 0; i < len; i++) {
    converted += english[num[i]] || num[i];
  }
  return converted;
};

export const tLocalNum = (num: number | string) => {
  return translateNumber({ num });
};

const translateNumber = ({
  lang = 'fa',
  num,
}: {
  lang?: string;
  num: number | string;
}) => {
  switch (lang) {
    case 'fa':
      return toPersianNumber(num);
    default:
      return toEnglishNumber(num);
  }
};

export default translateNumber;
