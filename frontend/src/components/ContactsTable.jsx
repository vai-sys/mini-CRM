import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        maxWidth: 1000,
        mt: 3,
        mb: 4,
        boxShadow: theme.shadows[3],
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
            <TableCell width="20%">Name</TableCell>
            <TableCell width="35%">Contact Info</TableCell>
            <TableCell width="35%">Company Details</TableCell>
            <TableCell width="10%" align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact._id}
              sx={{
                '&:hover': { backgroundColor: theme.palette.action.hover },
                transition: 'background-color 0.2s',
              }}
            >
              <TableCell>
                <Typography variant="subtitle1" fontWeight="medium">
                  {`${contact.firstName} ${contact.lastName}`}
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Chip
                    icon={<EmailIcon />}
                    label={contact.email}
                    size="small"
                    variant="outlined"
                    sx={{ maxWidth: '100%' }}
                  />
                  <Chip
                    icon={<PhoneIcon />}
                    label={contact.phoneNumber}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </TableCell>
              <TableCell>
                {contact.company && (
                  <Chip
                    icon={<BusinessIcon />}
                    label={`${contact.company}${contact.jobTitle ? ` • ${contact.jobTitle}` : ''}`}
                    size="small"
                    sx={{ maxWidth: '100%' }}
                  />
                )}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Edit Contact">
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(contact)}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Contact">
                  <IconButton
                    color="error"
                    onClick={() => onDelete(contact._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {contacts.length === 0 && (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography color="text.secondary">
            No contacts found. Add your first contact using the button above.
          </Typography>
        </Box>
      )}
    </TableContainer>
  );
};

export default ContactsTable;