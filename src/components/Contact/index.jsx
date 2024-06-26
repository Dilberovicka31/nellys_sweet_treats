import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container
      sx={{
        width: '70%', // Adjust width as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Example shadow
        padding: '24px',
        marginTop: '50px', // Adjust margin top as needed
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          required
          fullWidth
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
