import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const lines = fs
  .readFileSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, 'public/quran-simple.txt'),
    'utf-8'
  )
  .split(/\r?\n/);

const rawData = fs.readFileSync(
  path.join(serverRuntimeConfig.PROJECT_ROOT, 'public/quranIndexes.json'),
  'utf-8'
);
let quranIndexes = JSON.parse(rawData);

export type AyeIndex = {
  inQuran: number;
  inSurah: number;
  surah: number;
};

export type AyeRes = AyeIndex & {
  text: string;
};

type QuranIndex = AyeIndex & {
  page: number;
};

const quran: AyeRes[][] = [];
quranIndexes.forEach(({ page, inQuran, inSurah, surah }: QuranIndex) => {
  if (quran.length === page - 1) {
    quran.push([]);
  }
  quran[page - 1].push({ inQuran, inSurah, surah, text: lines[inQuran - 1] });
});

export default (req: NextApiRequest, res: NextApiResponse<AyeRes[]>) => {
  const { pageNumber } = req.query;
  res.status(200).json(quran[+pageNumber - 1]);
};
