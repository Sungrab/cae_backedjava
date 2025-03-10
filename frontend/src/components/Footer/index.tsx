import { Box, Container, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'inline-block',
            paddingRight: 2,
            color: theme.palette.secondary.contrastText,
          }}
        >
          <Typography variant="body1">WE LOVE LOCAL</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
