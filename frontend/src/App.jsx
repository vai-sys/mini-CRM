
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Alert,
  Fade,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { getContacts, createContact, updateContact, deleteContact } from './services/api';
import ContactsTable from './components/ContactsTable';
import EditDialog from './components/EditDialog';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [contacts, searchQuery]);

  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase().trim();
    
    if (!lowercaseQuery) {
      setFilteredContacts(contacts);
      return;
    }

    const filtered = contacts.filter(contact => {
      const searchableFields = [
        contact.firstName,
        contact.lastName,
        contact.email,
        contact.phoneNumber,
        contact.company,
        contact.jobTitle,
        `${contact.firstName} ${contact.lastName}` // Full name
      ].map(field => (field || '').toLowerCase());

      return searchableFields.some(field => field.includes(lowercaseQuery));
    });

    setFilteredContacts(filtered);
  };

  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
      setFilteredContacts(data);
    } catch (error) {
      showAlert('Failed to fetch contacts', 'error');
    }
  };

  const showAlert = (message, severity) => {
    setAlert({ show: true, message, severity });
    setTimeout(() => setAlert({ ...alert, show: false }), 3000);
  };

  const handleAddOrUpdateContact = async (contact) => {
    try {
      if (isEditing) {
        await updateContact(editId, contact);
        showAlert('Contact updated successfully', 'success');
      } else {
        await createContact(contact);
        showAlert('Contact added successfully', 'success');
      }
      fetchContacts();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      showAlert('Operation failed', 'error');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      showAlert('Contact deleted successfully', 'success');
      fetchContacts();
    } catch (error) {
      showAlert('Failed to delete contact', 'error');
    }
  };

  const handleEditContact = (contact) => {
    setFormData(contact);
    setEditId(contact._id);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ position: 'fixed', top: 24, right: 24, zIndex: 2000 }}>
        <Fade in={alert.show}>
          <Alert severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Fade>
      </Box>

      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Contact Management
          </Typography>

          <EditDialog
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleAddOrUpdateContact}
            isEditing={isEditing}
          />

          <Box sx={{ width: '100%', maxWidth: 1000, mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search contacts by name, email, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
          </Box>
          
          <ContactsTable 
            contacts={filteredContacts}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;