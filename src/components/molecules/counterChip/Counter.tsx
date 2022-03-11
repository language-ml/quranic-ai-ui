import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { ButtonBase, Stack } from '@mui/material';
import { FC } from 'react';

type CounterProps = {
  onChange: (inc: boolean) => void;
  weight: number;
  minWeight: number;
  maxWeight: number;
};

const Counter: FC<CounterProps> = ({
  onChange,
  weight,
  minWeight,
  maxWeight,
}) => {
  return (
    <Stack>
      <ButtonBase
        onClick={(event) => onChange(true)}
        sx={{ ml: 1, color: maxWeight === weight ? '#888' : 'black' }}
        disabled={maxWeight === weight}
      >
        <ArrowDropUpIcon sx={{ width: 15, height: 15 }} />
      </ButtonBase>
      <ButtonBase
        onClick={(event) => onChange(false)}
        sx={{ ml: 1, color: minWeight === weight ? '#888' : 'black' }}
        disabled={minWeight === weight}
      >
        <ArrowDropDownIcon sx={{ width: 15, height: 15 }} />
      </ButtonBase>
    </Stack>
  );
};

export default Counter;
