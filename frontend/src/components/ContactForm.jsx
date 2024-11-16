

import React from 'react';
import {
  Box,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
} from '@mui/icons-material';

const ContactForm = ({ formData, setFormData, onSubmit, isEditing }) => {
  const theme = useTheme();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'grid',
        gap: 3,
        p: 2,
        gridTemplateColumns: 'repeat(2, 1fr)',
        '& .MuiTextField-root': {
          width: '100%',
        },
      }}
    >
      <TextField
        required
        label="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <TextField
        required
        label="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <TextField
        required
        type="email"
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        InputProps={{
          startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
        }}
      />
      <TextField
        required
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        InputProps={{
          startAdornment: <PhoneIcon color="action" sx={{ mr: 1 }} />,
        }}
      />
      <TextField
        label="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        InputProps={{
          startAdornment: <BusinessIcon color="action" sx={{ mr: 1 }} />,
        }}
      />
      <TextField
        label="Job Title"
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        InputProps={{
          startAdornment: <WorkIcon color="action" sx={{ mr: 1 }} />,
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          gridColumn: '1 / -1',
          height: 48,
          backgroundColor: isEditing ? theme.palette.warning.main : theme.palette.primary.main,
          '&:hover': {
            backgroundColor: isEditing ? theme.palette.warning.dark : theme.palette.primary.dark,
          },
        }}
      >
        {isEditing ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Box>
  );
};

export default ContactForm;