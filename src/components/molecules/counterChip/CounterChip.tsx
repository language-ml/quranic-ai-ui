import { FC } from 'react';
import { Chip, ChipProps } from '@mui/material';
import Counter from './Counter';
import { green } from '@mui/material/colors';

export const CounterChip: FC<
  ChipProps & {
    onChangeWeight: (inc: boolean) => void;
    weight: number;
    minWeight: number;
    maxWeight: number;
  }
> = ({ weight, minWeight, maxWeight, onChangeWeight, ...props }) => {
  const x =
    Math.floor(((weight - minWeight) / (maxWeight - minWeight)) * 6) * 100;
  return (
    <Chip
      {...props}
      avatar={
        <Counter
          onChange={onChangeWeight}
          weight={weight}
          minWeight={minWeight}
          maxWeight={maxWeight}
        />
      }
      sx={{ background: green[x as keyof typeof green] }}
    />
  );
};
