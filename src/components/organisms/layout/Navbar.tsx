import { FC } from 'react';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { Typography, Menu, MenuItem, Stack } from '@mui/material';
import Image from 'next/image';

import inTheNameOfGodImg from '/public/images/in_the_name_of_god.png';
import { Language as LanguageIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const langsArray = [
  {
    txt: 'English',
    val: 'en',
  },
  {
    txt: 'فارسی',
    val: 'fa',
  },
];

const Navbar: FC = (props) => {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}
            alignItems="center"
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Image
                src={inTheNameOfGodImg}
                layout="intrinsic"
                width={130}
                height={35}
                alt={t('inTheNameOfGod')}
              />
            </Box>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <LanguageIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {langsArray.map(({ txt, val }, index) => (
                  <Link href={asPath} locale={val} passHref key={index}>
                    <MenuItem
                      key={index}
                      selected={locale === val}
                      disabled={locale === val}
                    >
                      <Typography
                        sx={
                          val === 'fa'
                            ? { fontFamily: 'iransansxv !important' }
                            : undefined
                        }
                      >
                        {txt}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack alignItems="center" justifyContent="center">
        <Box sx={{ display: { xs: 'block', sm: 'none' }, my: 2 }}>
          <Image
            src={inTheNameOfGodImg}
            layout="intrinsic"
            width={150}
            height={42}
            alt={t('inTheNameOfGod')}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
