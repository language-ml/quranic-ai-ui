import { Typography } from '@mui/material';
import { FC } from 'react';
import { toArabicNumber } from 'src/utils/translateNumberUtils';

type AyeComponentProps = {
  aye: number;
  text: string;
};

const AyeComponent: FC<AyeComponentProps> = ({ aye, text }) => {
  return (
    <span className="aye">
      <Typography variant="body2">{text}</Typography>
      <Typography variant="body2" className="aye-number">
        ‎﴿{toArabicNumber(aye)}﴾‏
      </Typography>
    </span>
  );
};

export default AyeComponent;
