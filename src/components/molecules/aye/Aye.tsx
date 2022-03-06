import { Typography } from '@mui/material';
import { FC } from 'react';
import { toArabicNumber } from 'src/utils/translateNumberUtils';

type AyeProps = {
  aye: number;
  text: string;
};

const Aye: FC<AyeProps> = ({ aye, text }) => {
  return (
    <span className="aye">
      <Typography variant="body2" className="aye">
        {text}
      </Typography>
      <Typography variant="body2" className="aye-number">
        ‎﴿{toArabicNumber(aye)}﴾‏
      </Typography>
    </span>
  );
};

export default Aye;
