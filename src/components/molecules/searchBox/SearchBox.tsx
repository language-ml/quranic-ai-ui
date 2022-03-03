import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Chip, InputAdornment } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Search as SearchIcon } from '@mui/icons-material';
import ChipCounter from 'src/components/atoms/chipCounter/ChipCounter';

export default function Tags() {
  const { t } = useTranslation();
  return (
    <Box>
      <Autocomplete
        freeSolo
        disableClearable
        options={top100Films}
        getOptionLabel={(option) => option.title}
        groupBy={(option) => option.group}
        multiple
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <Chip
              label={option.title}
              {...getTagProps({ index })}
              avatar={<ChipCounter />}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            label={t('search') + '...'}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: { title: string; group: string; year: number }[] = [
  { title: 'The Shawshank Redemption', group: 'g1', year: 1994 },
  { title: 'The Godfather', group: 'g2', year: 1972 },
  { title: 'The Godfather: Part II', group: 'g2', year: 1974 },
  { title: 'The Dark Knight', group: 'g2', year: 2008 },
  { title: '12 Angry Men', group: 'g2', year: 1957 },
  { title: "Schindler's List", group: 'g2', year: 1993 },
  { title: 'Pulp Fiction', group: 'g2', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    group: 'g2',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', group: 'g2', year: 1966 },
  { title: 'Fight Club', group: 'g2', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    group: 'g2',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    group: 'g2',
    year: 1980,
  },
  { title: 'Forrest Gump', group: 'g3', year: 1994 },
  { title: 'Inception', group: 'g3', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    group: 'g3',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", group: 'g3', year: 1975 },
  { title: 'Goodfellas', group: 'g3', year: 1990 },
  { title: 'The Matrix', group: 'g3', year: 1999 },
  { title: 'Seven Samurai', group: 'g3', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    group: 'g3',
    year: 1977,
  },
  { title: 'City of God', group: 'g4', year: 2002 },
  { title: 'Se7en', group: 'g4', year: 1995 },
  { title: 'The Silence of the Lambs', group: 'g4', year: 1991 },
  { title: "It's a Wonderful Life", group: 'g4', year: 1946 },
  { title: 'Life Is Beautiful', group: 'g4', year: 1997 },
  { title: 'The Usual Suspects', group: 'g4', year: 1995 },
  { title: 'Léon: The Professional', group: 'g4', year: 1994 },
  { title: 'Spirited Away', group: 'g5', year: 2001 },
  { title: 'Saving Private Ryan', group: 'g5', year: 1998 },
  { title: 'Once Upon a Time in the West', group: 'g5', year: 1968 },
  { title: 'American History X', group: 'g5', year: 1998 },
  { title: 'Interstellar', group: 'g5', year: 2014 },
  { title: 'Casablanca', group: 'g5', year: 1942 },
  { title: 'City Lights', group: 'g5', year: 1931 },
  { title: 'Psycho', group: 'g5', year: 1960 },
  { title: 'The Green Mile', group: 'g6', year: 1999 },
  { title: 'The Intouchables', group: 'g6', year: 2011 },
  { title: 'Modern Times', group: 'g6', year: 1936 },
  { title: 'Raiders of the Lost Ark', group: 'g6', year: 1981 },
  { title: 'Rear Window', group: 'g6', year: 1954 },
  { title: 'The Pianist', group: 'g6', year: 2002 },
  { title: 'The Departed', group: 'g6', year: 2006 },
  { title: 'Terminator 2: Judgment Day', group: 'g6', year: 1991 },
  { title: 'Back to the Future', group: 'g7', year: 1985 },
  { title: 'Whiplash', group: 'g7', year: 2014 },
  { title: 'Gladiator', group: 'g7', year: 2000 },
  { title: 'Memento', group: 'g7', year: 2000 },
  { title: 'The Prestige', group: 'g7', year: 2006 },
  { title: 'The Lion King', group: 'g7', year: 1994 },
  { title: 'Apocalypse Now', group: 'g8', year: 1979 },
  { title: 'Alien', group: 'g8', year: 1979 },
  { title: 'Sunset Boulevard', group: 'g8', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    group: 'g8',
    year: 1964,
  },
  { title: 'The Great Dictator', group: 'g8', year: 1940 },
  { title: 'Cinema Paradiso', group: 'g8', year: 1988 },
  { title: 'The Lives of Others', group: 'g9', year: 2006 },
  { title: 'Grave of the Fireflies', group: 'g9', year: 1988 },
  { title: 'Paths of Glory', group: 'g9', year: 1957 },
  { title: 'Django Unchained', group: 'g9', year: 2012 },
  { title: 'The Shining', group: 'g9', year: 1980 },
  { title: 'WALL·E', group: 'g9', year: 2008 },
  { title: 'American Beauty', group: 'g9', year: 1999 },
  { title: 'The Dark Knight Rises', group: 'g9', year: 2012 },
  { title: 'Princess Mononoke', group: 'g12', year: 1997 },
  { title: 'Aliens', group: 'g12', year: 1986 },
  { title: 'Oldboy', group: 'g12', year: 2003 },
  { title: 'Once Upon a Time in America', group: 'g12', year: 1984 },
  { title: 'Witness for the Prosecution', group: 'g12', year: 1957 },
  { title: 'Das Boot', group: 'g12', year: 1981 },
  { title: 'Citizen Kane', group: 'g12', year: 1941 },
  { title: 'North by Northwest', group: 'g12', year: 1959 },
  { title: 'Vertigo', group: 'g12', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    group: 'g1',
    year: 1983,
  },
  { title: 'Reservoir Dogs', group: 'g1', year: 1992 },
  { title: 'Braveheart', group: 'g1', year: 1995 },
  { title: 'M', group: 'g1', year: 1931 },
  { title: 'Requiem for a Dream', group: 'g1', year: 2000 },
  { title: 'Amélie', group: 'g1', year: 2001 },
  { title: 'A Clockwork Orange', group: 'g1', year: 1971 },
  { title: 'Like Stars on Earth', group: 'g1', year: 2007 },
  { title: 'Taxi Driver', group: 'g1', year: 1976 },
  { title: 'Lawrence of Arabia', group: 'g1', year: 1962 },
  { title: 'Double Indemnity', group: 'g1', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    group: 'g1',
    year: 2004,
  },
  { title: 'Amadeus', group: 'g1', year: 1984 },
  { title: 'To Kill a Mockingbird', group: 'g1', year: 1962 },
  { title: 'Toy Story 3', group: 'g1', year: 2010 },
  { title: 'Logan', group: 'g1', year: 2017 },
  { title: 'Full Metal Jacket', group: 'g1', year: 1987 },
  { title: 'Dangal', group: 'g1', year: 2016 },
  { title: 'The Sting', group: 'g1', year: 1973 },
  { title: '2001: A Space Odyssey', group: 'g1', year: 1968 },
  { title: "Singin' in the Rain", group: 'g1', year: 1952 },
  { title: 'Toy Story', group: 'g1', year: 1995 },
  { title: 'Bicycle Thieves', group: 'g1', year: 1948 },
  { title: 'The Kid', group: 'g1', year: 1921 },
  { title: 'Inglourious Basterds', group: 'g1', year: 2009 },
  { title: 'Snatch', group: 'g1', year: 2000 },
  { title: '3 Idiots', group: 'g1', year: 2009 },
  { title: 'Monty Python and the Holy Grail', group: 'g1', year: 1975 },
];
