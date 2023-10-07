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

const TrendingSection = () => {
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
        {TRENDINGS.map((trending, index) => (
          <Fragment key={trending.title}>
            <ListItem
              alignItems="flex-start"
              key={trending.title}
              sx={{ pl: 0, pr: 0 }}
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
                  secondary={trending.caption}
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
