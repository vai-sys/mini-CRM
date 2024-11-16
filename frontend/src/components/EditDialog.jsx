import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';
import ContactForm from './ContactForm';

const EditDialog = ({ isOpen, onOpenChange, formData, setFormData, onSubmit, isEditing }) => (
  <Box sx={{ width: '100%', maxWidth: 1000, mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        startIcon={<PersonAddIcon />}
        onClick={() => onOpenChange(true)}
        sx={{ 
          borderRadius: 2,
          px: 3,
          boxShadow: 2,
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        Add Contact
      </Button>
    </Box>
    <Dialog 
      open={isOpen}
      onClose={() => onOpenChange(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h5" component="div">
          {isEditing ? 'Edit Contact' : 'Add New Contact'}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          isEditing={isEditing}
        />
      </DialogContent>
    </Dialog>
  </Box>
);

export default EditDialog;