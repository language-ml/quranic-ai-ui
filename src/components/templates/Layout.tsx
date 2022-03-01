import { FC } from 'react';
import Footer from 'src/components/organisms/layout/Footer';
import Navbar from 'src/components/organisms/layout/Navbar';
import { Box } from '@mui/material';

const Layout: FC = (props) => {
  return (
    <>
      <Navbar />
      <Box component="main">{props.children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
