import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Layout from 'src/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SearchBox from 'src/components/molecules/searchBox/SearchBox';
import { Box, Container, Grid, IconButton, Paper, Stack } from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import QuranPage from 'src/components/organisms/quranPage/QuranPage';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <QuranPage />
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
