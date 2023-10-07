import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ paddingTop: '100px' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default RootLayout;
