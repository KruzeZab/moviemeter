import {
  Alert,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface ResultType {
  movies: [
    {
      title: string;
      poster: string;
    }
  ];
}

const RecommendPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<SubmitEvent>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8000?movie=${term}`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      console.log(data);
      setResults(data.movies);
    } catch (e) {
      console.log(e);
      setError('No movie found!');
    }
  };

  return (
    <Grid container spacing={3} rowSpacing={0}>
      <Grid item xs={12}>
        <Typography fontSize={'24px'} color="error" mb={2}>
          Movie Recommendation
        </Typography>
        <form onSubmit={handleSubmit} method="GET">
          <TextField fullWidth value={term} onChange={handleChange} />
        </form>
      </Grid>

      {error && (
        <Grid item xs={12} md={6} lg={4}>
          <Alert severity="error">{error}</Alert>
        </Grid>
      )}

      {results?.map((result) => (
        <Grid item xs={12} md={6} lg={4} key={result?.title}>
          <Card>
            <CardMedia sx={{ height: 200 }} image={result?.poster} />
            <CardContent>
              <Typography
                variant="h5"
                fontSize="18px"
                component="div"
              >
                {result?.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecommendPage;
