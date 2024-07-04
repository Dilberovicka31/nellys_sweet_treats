import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally reset form fields
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="email"
          label="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
