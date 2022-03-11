import { Box, Pagination, Stack } from '@mui/material';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import AyeComponent from 'src/components/molecules/aye/AyeComponent';
import { Aye, sureList } from 'src/constants/quran';

const QuranPage: FC = () => {
  const [page, setPage] = useState(1);
  const [ayes, setAyes] = useState<Aye[]>([]);

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
    <Stack
      spacing={2}
      alignItems="center"
      sx={{ position: 'sticky', top: 70, width: '100%' }}
    >
      {ayes.length > 0 && (
        <Box>{sureList[ayes[ayes.length - 1].sureh - 1].name}</Box>
      )}
      <Box className={clsx('quran', 'quranic-border')} sx={{ width: '100%' }}>
        {ayes.map((aye: Aye, index: number) => (
          <AyeComponent key={index} aye={aye.aye} text={aye.text} />
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
