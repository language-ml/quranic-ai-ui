import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Layout from 'src/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SearchBox from 'src/components/molecules/searchBox/SearchBox';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import clsx from 'clsx';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Paper
                sx={{
                  background: '#f7fce3',
                }}
              >
                <Typography
                  className={clsx('taha', 'quranic-border')}
                  variant="body2"
                >
                  الم ‎﴿١﴾‏ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ
                  ‎﴿٢﴾‏ نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا
                  بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ ‎﴿٣﴾‏ مِن
                  قَبْلُ هُدًى لِّلنَّاسِ وَأَنزَلَ الْفُرْقَانَ ۗ إِنَّ
                  الَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ
                  وَاللَّهُ عَزِيزٌ ذُو انتِقَامٍ ‎﴿٤﴾‏ إِنَّ اللَّهَ لَا
                  يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ
                  ‎﴿٥﴾‏ هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ
                  يَشَاءُ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ ‎﴿٦﴾‏
                  هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ
                  مُّحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ ۖ
                  فَأَمَّا الَّذِينَ فِي قُلُوبِهِمْ زَيْغٌ فَيَتَّبِعُونَ مَا
                  تَشَابَهَ مِنْهُ ابْتِغَاءَ الْفِتْنَةِ وَابْتِغَاءَ
                  تَأْوِيلِهِ ۗ وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ ۗ
                  وَالرَّاسِخُونَ فِي الْعِلْمِ يَقُولُونَ آمَنَّا بِهِ كُلٌّ
                  مِّنْ عِندِ رَبِّنَا ۗ وَمَا يَذَّكَّرُ إِلَّا أُولُو
                  الْأَلْبَابِ ‎﴿٧﴾‏ رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ
                  هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ
                  الْوَهَّابُ ‎﴿٨﴾‏ رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ
                  لَّا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ
                  ‎﴿٩﴾‏
                </Typography>
              </Paper>
              <Paper>
                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                ></Stack>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack
              direction="row"
              sx={{ width: '100%' }}
              alignItems="center"
              spacing={2}
            >
              <Box width="100%">
                <SearchBox />
              </Box>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'fa', ['common'])),
  },
});
