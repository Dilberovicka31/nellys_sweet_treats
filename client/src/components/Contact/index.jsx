import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Modal, Box } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [open, setOpen] = useState(false); // State to control modal visibility

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
        setOpen(true); // Open the modal on success
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{color:'#463f3a'}}>Contact Us</Typography>
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
        <Button type="submit" variant="contained" sx={{bgcolor: '#D4A373', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', color:'#463f3a' }}>
          Submit
        </Button>
      </form>

      {/* Modal to display success message */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ 
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width: 400,
       bgcolor: '#FEFAE0', // Background color
       boxShadow: 24,
       p: 4,
       borderRadius: 8, // Border radius
        }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Email Sent Successfully!
          </Typography>
          <Typography variant="body1">
            Thank you for contacting us. We will get back to you shortly.
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2, bgcolor: '#D4A373', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', color:'#463f3a'  }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default ContactForm;
