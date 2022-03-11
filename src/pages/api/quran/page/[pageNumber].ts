import { Aye, pageAyes } from 'src/constants/quran';
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

const allAyes: Aye[] = lines.map((line, index) => {
  const [sureh, aye, text] = line.split('|');
  return { sureh: +sureh, aye: +aye, text, index };
});

export default (req: NextApiRequest, res: NextApiResponse<Aye[]>) => {
  const { pageNumber } = req.query;
  const [startAye, length] = pageAyes[+pageNumber];
  res.status(200).json(allAyes.slice(startAye, startAye + length));
};
