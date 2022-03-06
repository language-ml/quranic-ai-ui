import { Box, Pagination, Stack } from '@mui/material';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import Aye from 'src/components/molecules/aye/Aye';
import { sureNames } from 'src/constants/quran';
import { AyeRes } from 'src/pages/api/quran/page/[pageNumber]';

const QuranPage: FC = () => {
  const [page, setPage] = useState(1);
  const [ayes, setAyes] = useState<AyeRes[]>([]);

  useEffect(() => {
    fetch('api/quran/page/' + page)
      .then((res) => res.json())
      .then((data) => {
        setAyes(data);
        console.log(data);
      })
      .catch();
  }, [page]);

  return (
    <Stack spacing={2} alignItems="center">
      {ayes.length > 0 && (
        <Box>{sureNames[ayes[ayes.length - 1].surah - 1]}</Box>
      )}
      <Box className={clsx('quran', 'quranic-border')}>
        {ayes.map((aye: AyeRes, index: number) => (
          <Aye key={index} aye={aye.inSurah} text={aye.text} />
        ))}
      </Box>
      <Box>
        <Pagination
          size="small"
          count={604}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </Stack>
  );
};

export default QuranPage;
