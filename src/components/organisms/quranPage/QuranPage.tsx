import { Autocomplete, Box, Stack, TextField } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import AyeComponent from 'src/components/molecules/aye/AyeComponent';
import { Aye, getPage, surahList } from 'src/constants/quran';

const QuranPage: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [surah, setSurah] = useState(surahList[0]);
  const [aye, setAye] = useState(1);
  const [pageAyes, setPageAyes] = useState<Aye[]>([]);

  useEffect(() => {
    fetch('api/quran/page/' + page)
      .then((res) => res.json())
      .then(setPageAyes)
      .catch();
  }, [page]);

  useEffect(() => {
    if (pageAyes.length === 0) {
      return;
    }

    const newSurah = surahList[pageAyes[pageAyes.length - 1].surah - 1];
    if (surah.name !== newSurah.name) setSurah(newSurah);

    if (!pageAyes.find((a) => a.aye === aye)) {
      setAye(pageAyes[0].aye);
    }
  }, [pageAyes]);

  const goTo = (surah: any, aye: number) => {
    const newPage = getPage(surah, aye);
    if (page !== newPage) setPage(newPage);
  };

  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{ position: 'sticky', top: 70, width: '100%' }}
    >
      <Stack direction="row">
        <TextField
          type="number"
          label={t('page')}
          InputProps={{
            inputProps: {
              min: 1,
              max: 640,
              sx: { textAlign: 'center', width: 70 },
            },
          }}
          value={page}
          onChange={(e) => {
            const val = +e.target.value;
            if (val > 0 && val < 640 && val !== page) setPage(val);
          }}
          size="small"
          variant="standard"
        />
        <Autocomplete
          disableClearable
          options={surahList}
          getOptionLabel={(option) => option.name}
          value={surah}
          onChange={(e, val) => {
            if (val.name !== surah.name) {
              setSurah(val);
              setAye(1);
              goTo(val, 1);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label={t('surah')}
              variant="standard"
              inputProps={{
                ...params.inputProps,
                style: { width: 100 },
              }}
            />
          )}
        />
        <TextField
          type="number"
          label={t('aye')}
          InputProps={{
            inputProps: {
              min: 1,
              max: surah.len,
              sx: { textAlign: 'center', width: 70 },
            },
          }}
          value={aye}
          onChange={(e) => {
            const val = +e.target.value;
            if (val > 0 && val < surah.len && val !== aye) {
              setAye(val);
              goTo(surah, val);
            }
          }}
          size="small"
          variant="standard"
        />
      </Stack>
      <Box className={clsx('quran', 'quranic-border')} sx={{ width: '100%' }}>
        {pageAyes.map((aye: Aye, index: number) => (
          <AyeComponent key={index} aye={aye.aye} text={aye.text} />
        ))}
      </Box>
    </Stack>
  );
};

export default QuranPage;
