import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgColor: '#272727',
        borderTop: '1px solid',
        mt: 4,

        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack
          direction="row"
          color="orangered"
          alignItems="center"
          gap={0.5}
          mb={1}
        >
          <SpeedIcon />
          <Typography
            variant="h6"
            color="orangered"
            fontWeight="bold"
          >
            MovieMeter
          </Typography>
        </Stack>
        <Grid
          container
          justifyContent="space-between"
          columnSpacing={15}
          rowSpacing={4}
        >
          {/* One */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h5"
              fontSize="21px"
              mb={1}
              color="text.primary"
              fontWeight="bold"
            >
              About MovieMeter
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Moviemeter is a leading platform for getting info on
              movies. Explore our vast collection and enjoy unlimited
              entertainment.
            </Typography>
          </Grid>

          {/* Two */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h5"
              fontSize="21px"
              mb={2}
              fontWeight="bold"
            >
              Contact us
            </Typography>
            <Stack gap={1}>
              <Typography variant="body1" color="text.secondary">
                Email: info@moviemeter.com
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Phone: +977 980-CALL-MOV
              </Typography>
            </Stack>
          </Grid>

          {/* Box Three */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h5"
              fontSize="21px"
              mb={2}
              fontWeight="bold"
            >
              Follow us
            </Typography>
            <Stack direction="row" gap={2} color="text.secondary">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
