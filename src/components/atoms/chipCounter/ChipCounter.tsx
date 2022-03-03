import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { FC } from 'react';

const ChipCounter: FC = () => {
  return (
    <Stack>
      <ArrowDropUpIcon sx={{ width: 15, height: 15, ml: 1 }} />
      <ArrowDropDownIcon sx={{ width: 15, height: 15, ml: 1 }} />
    </Stack>
  );
};

export default ChipCounter;
