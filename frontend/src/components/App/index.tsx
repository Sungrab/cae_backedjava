import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../Navbar';
import Box from '@mui/material/Box';
import pizza from '../../assets/images/pizza.jpg';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [, setActionToBePerformed] = useState(false);

  const handleHeaderClick = () => {
    setActionToBePerformed(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${pizza})`,
        backgroundSize: 'cover',
      }}
    >
      <Header
        title="Terroir & Cie"
        version={0 + 1}
        handleHeaderClick={handleHeaderClick}
      />
      <Container
        component="main"
        sx={{
          flex: '1',
        }}
      >
        <NavBar />
        <Outlet /> {}
      </Container>

      <Footer />
    </Box>
  );
};

export default App;
