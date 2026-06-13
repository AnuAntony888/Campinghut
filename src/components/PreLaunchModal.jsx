import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import confetti from 'canvas-confetti';

const locations = [
  { value: 'kodaikanal', label: 'Kodaikanal (Kavunji)' },
  { value: 'ooty', label: 'Ooty' },
  { value: 'wayanad', label: 'Wayanad' },
  { value: 'kannur', label: 'Kannur' },
  { value: 'coorg', label: 'Coorg' },
];

export default function PreLaunchModal({ open, onClose, initialLocation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [prefLocation, setPrefLocation] = useState('kodaikanal');
  const [keepUpdated, setKeepUpdated] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setErrors({});
      setSubmitError('');
      setLoading(false);
      if (initialLocation) {
        setPrefLocation(initialLocation);
      }
    }
  }, [open, initialLocation]);

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setSubmitError('');
      const generatedId = `TN-${Math.floor(1000 + Math.random() * 9000)}`;

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const hasPlaceholders = 
        !serviceId || 
        !templateId || 
        !publicKey ||
        serviceId.includes('here') || 
        templateId.includes('here') || 
        publicKey.includes('here');

      if (hasPlaceholders) {
        console.warn('EmailJS: Config keys are missing or placeholders. Simulating successful submission.');
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
          confetti({
            particleCount: 120,
            spread: 60,
            origin: { y: 0.65 },
            colors: ['#1b4332', '#d97706', '#40916c', '#ffffff'],
          });
        }, 1000);
        return;
      }

      const templateParams = {
        title: 'New Membership Request - TrailNest Club',
        name: fullName,
        email: email,
        message: `Member ID: ${generatedId}\nPreferred Nest: ${getPrefLocationLabel()}\nNewsletter Subscription: ${keepUpdated ? 'Yes' : 'No'}`,
        time: new Date().toLocaleString(),
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setLoading(false);
          setSubmitted(true);
          confetti({
            particleCount: 120,
            spread: 60,
            origin: { y: 0.65 },
            colors: ['#1b4332', '#d97706', '#40916c', '#ffffff'],
          });
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setLoading(false);
          setSubmitError('Failed to send request. Please check your network connection or configure your EmailJS credentials.');
        });
    }
  };

  const getPrefLocationLabel = () => {
    return locations.find(loc => loc.value === prefLocation)?.label || 'Kodaikanal';
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: 'hidden',
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          background: '#ffffff',
          color: 'primary.main',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2.5,
          px: 3,
          borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
        }}
      >
        <Typography variant="h6" sx={{ color: 'primary.main', fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
          {submitted ? 'Welcome to the Nest' : 'Join the TrailNest Club'}
        </Typography>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(27, 67, 50, 0.05)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ px: 3, py: 4 }}>
        {!submitted ? (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Secure early access invites, priority reservations across our five sanctuaries, and custom members-only upgrades for your next forest stay.
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              placeholder="Your Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
            />

            <TextField
              fullWidth
              select
              label="Select Your Nest Preference"
              value={prefLocation}
              onChange={(e) => setPrefLocation(e.target.value)}
            >
              {locations.map((loc) => (
                <MenuItem key={loc.value} value={loc.value}>
                  {loc.label}
                </MenuItem>
              ))}
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  checked={keepUpdated}
                  onChange={(e) => setKeepUpdated(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="caption" color="text.secondary">
                  I wish to receive stay updates and member newsletter notifications.
                </Typography>
              }
            />
            
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disabled={loading}
              sx={{ py: 1.5, mt: 1, boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)' }}
            >
              {loading ? 'Sending Request...' : 'Request Member Pass'}
            </Button>

            {submitError && (
              <Typography variant="body2" color="error" sx={{ textAlign: 'center', mt: 1 }}>
                {submitError}
              </Typography>
            )}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 1 }}>
            <CheckCircleIcon color="success" sx={{ fontSize: '4.5rem', mb: 2 }} />
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800, mb: 1 }}>
              Membership Approved!
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3.5 }}>
              Thanks {fullName}! We have registered your member account. Your confirmation has been sent to <strong>{email}</strong>.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={onClose}
              sx={{ mt: 1, py: 1.2 }}
            >
              Back to Exploration
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
