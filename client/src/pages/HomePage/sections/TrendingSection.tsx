import { Fragment } from 'react';
import { TrendingUp } from '@mui/icons-material';
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { getTwoDigitIndex } from '../../../helpers/fn';
import { Link } from 'react-router-dom';

const TRENDINGS = [
  {
    title: 'The Godfather',
    caption: 'An epic journey through the cosmos.',
  },
  {
    title: 'American History X',
    caption: 'A chilling tale of hidden horrors.',
  },
  {
    title: 'The Silence of the Lambs',
    caption: 'A thrilling exploration of alternate worlds.',
  },
  {
    title: 'Fight Club',
    caption: 'Unraveling the secrets of the past.',
  },
  {
    title: 'Fight Clubs',
    caption: 'Unraveling the secrets of the past.',
  },
];

interface TrendingSectionProps {
  trendings: {
    id: number;
    title: string;
    rating: number;
    director: string;
    genre: string[];
    imageUrls: string[];
    excerpt: string;
    grossIncome: number;
    year: number;
    writers: string[];
    stars: string[];
  }[];
}

const TrendingSection = (props: TrendingSectionProps) => {
  const { trendings } = props;
  return (
    <section>
      {/* Title */}
      <Typography
        variant="h6"
        display="flex"
        alignItems="center"
        gap={1}
        fontSize="24px"
        fontWeight="bold"
      >
        Trending
        <TrendingUp />
      </Typography>

      {/* Trending List */}
      <List>
        {trendings.map((trending: any, index: number) => (
          <Fragment key={trending.id}>
            <ListItem
              alignItems="flex-start"
              key={trending.title}
              sx={{ pl: 0, pr: 0 } }
            >
              <ListItemButton sx={{ p: 0.5, pl: 1 }}>
                <ListItemAvatar>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                  <Typography variant="h4" color="error.main">
                    {getTwoDigitIndex(index + 1)}
                  </Typography>
                </ListItemAvatar>
                <ListItemText
                  primary={trending.title}
                  secondary={trending.excerpt}
                />
              </ListItemButton>
            </ListItem>
            {index < TRENDINGS.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        ))}
      </List>
    </section>
  );
};

export default TrendingSection;
