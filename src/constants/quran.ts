export type Aye = { sureh: number; aye: number; text: string; index: number };

export const sureList = [
  { name: 'الفاتحة', len: 7 },
  { name: 'البقرة', len: 286 },
  { name: 'آل عمران', len: 200 },
  { name: 'النساء', len: 176 },
  { name: 'المائدة', len: 120 },
  { name: 'الأنعام', len: 165 },
  { name: 'الأعراف', len: 206 },
  { name: 'الأنفال', len: 75 },
  { name: 'التوبة', len: 129 },
  { name: 'يونس', len: 109 },
  { name: 'هود', len: 123 },
  { name: 'يوسف', len: 111 },
  { name: 'الرعد', len: 43 },
  { name: 'ابراهيم', len: 52 },
  { name: 'الحجر', len: 99 },
  { name: 'النحل', len: 128 },
  { name: 'الإسراء', len: 111 },
  { name: 'الكهف', len: 110 },
  { name: 'مريم', len: 98 },
  { name: 'طه', len: 135 },
  { name: 'الأنبياء', len: 112 },
  { name: 'الحج', len: 78 },
  { name: 'المؤمنون', len: 118 },
  { name: 'النور', len: 64 },
  { name: 'الفرقان', len: 77 },
  { name: 'الشعراء', len: 227 },
  { name: 'النمل', len: 93 },
  { name: 'القصص', len: 88 },
  { name: 'العنكبوت', len: 69 },
  { name: 'الروم', len: 60 },
  { name: 'لقمان', len: 34 },
  { name: 'السجدة', len: 30 },
  { name: 'الأحزاب', len: 73 },
  { name: 'سبإ', len: 54 },
  { name: 'فاطر', len: 45 },
  { name: 'يس', len: 83 },
  { name: 'الصافات', len: 182 },
  { name: 'ص', len: 88 },
  { name: 'الزمر', len: 75 },
  { name: 'غافر', len: 85 },
  { name: 'فصلت', len: 54 },
  { name: 'الشورى', len: 53 },
  { name: 'الزخرف', len: 89 },
  { name: 'الدخان', len: 59 },
  { name: 'الجاثية', len: 37 },
  { name: 'الأحقاف', len: 35 },
  { name: 'محمد', len: 38 },
  { name: 'الفتح', len: 29 },
  { name: 'الحجرات', len: 18 },
  { name: 'ق', len: 45 },
  { name: 'الذاريات', len: 60 },
  { name: 'الطور', len: 49 },
  { name: 'النجم', len: 62 },
  { name: 'القمر', len: 55 },
  { name: 'الرحمن', len: 78 },
  { name: 'الواقعة', len: 96 },
  { name: 'الحديد', len: 29 },
  { name: 'المجادلة', len: 22 },
  { name: 'الحشر', len: 24 },
  { name: 'الممتحنة', len: 13 },
  { name: 'الصف', len: 14 },
  { name: 'الجمعة', len: 11 },
  { name: 'المنافقون', len: 11 },
  { name: 'التغابن', len: 18 },
  { name: 'الطلاق', len: 12 },
  { name: 'التحريم', len: 12 },
  { name: 'الملك', len: 30 },
  { name: 'القلم', len: 52 },
  { name: 'الحاقة', len: 52 },
  { name: 'المعارج', len: 44 },
  { name: 'نوح', len: 28 },
  { name: 'الجن', len: 28 },
  { name: 'المزمل', len: 20 },
  { name: 'المدثر', len: 56 },
  { name: 'القيامة', len: 40 },
  { name: 'الانسان', len: 31 },
  { name: 'المرسلات', len: 50 },
  { name: 'النبإ', len: 40 },
  { name: 'النازعات', len: 46 },
  { name: 'عبس', len: 42 },
  { name: 'التكوير', len: 29 },
  { name: 'الإنفطار', len: 19 },
  { name: 'المطففين', len: 36 },
  { name: 'الإنشقاق', len: 25 },
  { name: 'البروج', len: 22 },
  { name: 'الطارق', len: 17 },
  { name: 'الأعلى', len: 19 },
  { name: 'الغاشية', len: 26 },
  { name: 'الفجر', len: 30 },
  { name: 'البلد', len: 20 },
  { name: 'الشمس', len: 15 },
  { name: 'الليل', len: 21 },
  { name: 'الضحى', len: 11 },
  { name: 'الشرح', len: 8 },
  { name: 'التين', len: 8 },
  { name: 'العلق', len: 19 },
  { name: 'القدر', len: 5 },
  { name: 'البينة', len: 8 },
  { name: 'الزلزلة', len: 8 },
  { name: 'العاديات', len: 11 },
  { name: 'القارعة', len: 11 },
  { name: 'التكاثر', len: 8 },
  { name: 'العصر', len: 3 },
  { name: 'الهمزة', len: 9 },
  { name: 'الفيل', len: 5 },
  { name: 'قريش', len: 4 },
  { name: 'الماعون', len: 7 },
  { name: 'الكوثر', len: 3 },
  { name: 'الكافرون', len: 6 },
  { name: 'النصر', len: 3 },
  { name: 'المسد', len: 5 },
  { name: 'الإخلاص', len: 4 },
  { name: 'الفلق', len: 5 },
  { name: 'الناس', len: 6 },
];

export const pagesLen = [
  7, 5, 11, 8, 5, 8, 11, 9, 4, 8, 7, 7, 5, 5, 8, 4, 7, 7, 7, 8, 7, 4, 8, 10, 6,
  7, 5, 5, 4, 6, 6, 8, 5, 4, 5, 6, 3, 4, 8, 3, 4, 4, 3, 5, 5, 5, 7, 1, 4, 9, 6,
  7, 7, 8, 8, 7, 9, 9, 7, 6, 8, 9, 8, 7, 6, 11, 8, 8, 5, 4, 8, 8, 7, 6, 8, 6, 6,
  5, 3, 5, 4, 3, 7, 4, 7, 7, 8, 6, 9, 5, 7, 5, 3, 7, 4, 8, 8, 6, 7, 6, 7, 7, 8,
  8, 5, 3, 3, 4, 4, 4, 6, 8, 5, 5, 4, 5, 7, 7, 6, 6, 6, 7, 6, 8, 5, 5, 7, 8, 10,
  9, 8, 9, 8, 7, 9, 5, 8, 9, 4, 7, 9, 8, 6, 7, 6, 5, 4, 5, 6, 8, 11, 11, 8, 7,
  6, 8, 6, 10, 6, 8, 6, 8, 9, 16, 10, 7, 6, 6, 6, 4, 4, 7, 8, 9, 8, 11, 8, 8, 9,
  8, 7, 5, 7, 9, 8, 6, 6, 7, 7, 6, 5, 5, 4, 7, 7, 7, 7, 4, 7, 7, 7, 6, 7, 5, 6,
  5, 7, 6, 8, 6, 5, 8, 9, 11, 8, 9, 8, 10, 9, 9, 8, 7, 7, 9, 9, 8, 8, 9, 9, 10,
  7, 9, 11, 9, 10, 10, 8, 8, 7, 6, 9, 11, 6, 9, 8, 9, 8, 8, 5, 8, 5, 10, 6, 8,
  6, 5, 8, 6, 9, 9, 10, 15, 16, 20, 19, 20, 15, 8, 12, 8, 8, 12, 10, 8, 7, 8, 6,
  9, 8, 8, 10, 7, 10, 10, 11, 11, 9, 8, 9, 11, 10, 8, 11, 11, 5, 7, 7, 11, 8, 8,
  13, 9, 14, 13, 11, 14, 13, 13, 13, 12, 19, 15, 25, 14, 13, 12, 11, 11, 15, 12,
  10, 10, 14, 11, 9, 13, 15, 9, 9, 11, 11, 5, 10, 8, 7, 8, 8, 9, 9, 8, 6, 17,
  10, 15, 17, 15, 15, 15, 14, 10, 10, 7, 4, 5, 7, 10, 5, 3, 5, 9, 9, 12, 11, 12,
  12, 10, 19, 20, 21, 23, 28, 25, 23, 24, 23, 21, 13, 9, 13, 9, 11, 8, 13, 12,
  10, 8, 8, 7, 7, 8, 7, 9, 11, 7, 7, 10, 8, 9, 7, 8, 7, 7, 11, 11, 10, 9, 8, 9,
  9, 10, 11, 8, 9, 6, 11, 9, 10, 6, 9, 7, 8, 5, 8, 7, 4, 8, 11, 7, 7, 8, 9, 8,
  9, 9, 8, 7, 12, 8, 6, 13, 15, 13, 14, 16, 13, 24, 27, 25, 26, 24, 27, 29, 16,
  10, 16, 19, 22, 10, 5, 11, 10, 9, 7, 9, 11, 7, 8, 9, 9, 8, 7, 9, 9, 8, 11, 8,
  11, 9, 9, 9, 8, 8, 10, 5, 7, 9, 13, 7, 12, 12, 11, 14, 13, 13, 16, 18, 21, 20,
  13, 9, 10, 10, 9, 6, 8, 7, 11, 8, 10, 9, 9, 6, 8, 5, 5, 7, 7, 15, 20, 16, 24,
  21, 23, 17, 18, 26, 18, 24, 21, 22, 22, 24, 27, 27, 34, 26, 23, 8, 7, 6, 5, 6,
  5, 10, 4, 6, 7, 8, 5, 6, 7, 9, 8, 7, 7, 9, 9, 5, 7, 7, 5, 12, 14, 19, 27, 18,
  26, 28, 29, 15, 18, 13, 15, 19, 18, 30, 28, 26, 20, 25, 31, 30, 25, 31, 42,
  29, 25, 28, 27, 22, 32, 30, 23, 27, 29, 26, 27, 12, 18, 21, 17, 14, 14, 15,
];

let lastIndex = 0;
export const pageAyes = pagesLen.map((l) => {
  const res = [lastIndex, l];
  lastIndex += l;
  return res;
});
