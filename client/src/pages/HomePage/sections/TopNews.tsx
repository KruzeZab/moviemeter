import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Link as MuiLink,
} from '@mui/material';

const NEWS = [
  {
    id: 1,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 2,
    title: 'Is this the right time to buy a house?',
    createdDate: 'June 3, 2023',
  },
  {
    id: 3,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 4,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 5,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 6,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 7,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
  {
    id: 8,
    title: 'Is this the right time to buy a house?',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    createdDate: 'June 3, 2023',
  },
];

interface TopNewsProps {
  news: {
    id: number;
    title: string;
    excerpt: string;
    description: string;
    dateCreated: string;
    imageUrl: string;
  }[];
}

const TopNews = (props: TopNewsProps) => {
  const { news } = props;

  return (
    <>
      <Typography
        variant="h5"
        pl={1.5}
        mb={2.5}
        borderLeft="4px solid orangered"
        fontWeight="bold"
      >
        Top News
      </Typography>
      <Grid container justifyContent="space-between">
        {news.map((item: any) => (
          <Grid key={item.id} item xs={12} md={6} lg={3}>
            <List sx={{ width: '100%' }}>
              <ListItem key={item.id} sx={{ pt: 0, pl: 0 }}>
                <ListItemButton
                  sx={{ pl: 1 }}
                  
                >
                  <ListItemAvatar
                    sx={{ alignSelf: 'stretch', mr: 2 }}
                  >
                    <Avatar
                      sx={{ width: 80, height: '100%' }}
                      variant="rounded"
                      alt="Remy Sharp"
                      src={item.imageUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.dateCreated}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TopNews;
