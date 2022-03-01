import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Layout from 'src/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return <Layout>{t('inTheNameOfGod')}</Layout>;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'fa', ['common'])),
  },
});
