import { Container, Typography } from '@mui/material';

const HomePage = () => {
  
  return (
    <Container component="main" sx={{ mt: 8, mb: 2, flex: '1' }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        My HomePage
      </Typography>
    </Container>
  );
};

export default HomePage;
