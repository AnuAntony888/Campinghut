import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Paper, Dialog, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import SpaIcon from '@mui/icons-material/Spa';

const symbols = [
  {
    image: '/safari_tent.png',
    title: 'The Canvas Tent',
    desc: 'Represents a return to the essentials of shelter. A comfortable, heavy-duty glamping tent that shields you while keeping you intimately connected with the whispering winds and alpine air.',
    concept: 'Rustic Shelter',
  },
  {
    image: '/camping_dining.png',
    title: 'The Campfire',
    desc: 'The ancient focal point of human gathering. Symbolizes warmth, cozy acoustic music sessions, and the shared joy of slow cooking, storytelling, and community by the glowing embers.',
    concept: 'Ancient Circle',
  },
  {
    image: '/hero_background.png',
    title: 'The Pine Forest',
    desc: 'Nature’s ultimate therapy. Towering evergreens that provide natural solitude, filter out city noise, and release crisp pine-scented phytoncides that lower stress and restore health.',
    concept: 'Natural Healing',
  },
  {
    image: '/dest_kodaikanal.png',
    title: 'The Mountains',
    desc: 'Heights of inspiration. Majestic ridges that challenge us to look up, seek fresh altitudes, and put our daily routines and urban lives into a grander, peaceful perspective.',
    concept: 'Altitudes of Peace',
  },
  {
    image: '/dest_coorg.png',
    title: 'The Sun',
    desc: 'The promise of a new morning. In the crest, the warm sun rising behind mountain peaks stands for fresh beginnings, warm energy, and waking up with natural circadian rhythms.',
    concept: 'New Mornings',
  },
  {
    image: '/dest_ooty.png',
    title: 'The Backpack & Chair',
    desc: 'The act of rest. Setting down your heavy pack, unfolding a camp chair, and simply sitting back. It reminds us that slowing down and doing nothing is a necessary form of luxury.',
    concept: 'The Act of Rest',
  },
];

export default function LogoStory() {
  const theme = useTheme();
  const [lightbox, setLightbox] = useState({ open: false, image: '', title: '', desc: '', concept: '' });

  const handleOpenLightbox = (sym) => {
    setLightbox({
      open: true,
      image: sym.image,
      title: sym.title,
      desc: sym.desc,
      concept: sym.concept,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox({ ...lightbox, open: false });
  };

  return (
    <Box
      id="logo-story"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="subtitle2"
            color="secondary"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2px',
              mb: 1,
            }}
          >
            Behind the Crest
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, mb: 2 }}>
            The TrailNest Philosophy
          </Typography>

          {/* Leaf Divider */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
            <SpaIcon sx={{ mx: 1.5, color: 'secondary.main', fontSize: '1.2rem', transform: 'rotate(15deg)' }} />
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 650, mx: 'auto', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Our crest is more than a design—it’s our roadmap to peace. Every hand-drawn line reflects the core elements of the perfect wilderness detox. Click on any symbol to immerse.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Circular Logo Visual on Left */}
          <Grid item xs={12} md={4.5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={4}
                onClick={() => handleOpenLightbox({
                  image: '/resort_logo.png',
                  title: 'TrailNest Camping Crest',
                  desc: 'The complete visual seal of AMG Wilderness Resort, combining the tent, forest, river, mountains, and crackling campfire under the mantra: Simple Stays, Real Peace.',
                  concept: 'Brand Seal'
                })}
                sx={{
                  position: 'relative',
                  p: 3,
                  borderRadius: '50%',
                  width: { xs: 290, sm: 360, md: 390 },
                  height: { xs: 290, sm: 360, md: 390 },
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#faf9f6',
                  border: `4px double ${theme.palette.primary.main}`,
                  boxShadow: '0 20px 40px rgba(27,67,50,0.08)',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.02) rotate(1deg)',
                    boxShadow: '0 25px 50px rgba(27,67,50,0.15)',
                  }
                }}
              >
                <Box
                  component={motion.img}
                  // src="/resort_logo.png"
                  alt="TrailNest Crest"
                  sx={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'contain',
                  }}
                />
              </Paper>

              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 800, mb: 1, fontFamily: '"Playfair Display", serif' }}>
                  "Simple Stays. Real Peace."
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', maxWidth: 340, mx: 'auto' }}>
                  Our visual pledge to strip away the noise and reconnect you with what matters.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Breakdown Grid on Right */}
          <Grid item xs={12} md={7.5}>
            <Grid container spacing={3.5}>
              {symbols.map((sym, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      onClick={() => handleOpenLightbox(sym)}
                      sx={{
                        p: 3.5,
                        borderRadius: 4,
                        background: 'rgba(27, 67, 50, 0.02)',
                        border: '1px solid rgba(27, 67, 50, 0.05)',
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        '&:hover': {
                          background: '#ffffff',
                          borderColor: 'secondary.light',
                          transform: 'translateY(-6px)',
                          boxShadow: '0 12px 30px rgba(27, 67, 50, 0.08)',
                          '& .symbol-gold-ring': {
                            transform: 'rotate(180deg) scale(1.05)',
                            borderColor: 'secondary.main',
                          },
                          '& .symbol-img': {
                            transform: 'scale(1.18)',
                          }
                        },
                      }}
                    >
                      {/* Image Thumbnail inside gold double ring */}
                      <Box sx={{ position: 'relative', width: 92, height: 92, mb: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Rotating gold dashed border */}
                        <Box
                          className="symbol-gold-ring"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '1.5px dashed rgba(217, 119, 6, 0.45)',
                            transition: 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.4s ease',
                          }}
                        />
                        {/* Inner photo container with zoom */}
                        <Box
                          sx={{
                            position: 'relative',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid #1b4332',
                            boxShadow: '0 4px 10px rgba(27,67,50,0.06)',
                          }}
                        >
                          <Box
                            className="symbol-img"
                            component="img"
                            src={sym.image}
                            alt={sym.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{
                          fontWeight: 750,
                          fontSize: '1.1rem',
                          mb: 1.5,
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {sym.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                        {sym.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* 5-star interactive lightbox viewer */}
      <Dialog
        open={lightbox.open}
        onClose={handleCloseLightbox}
        maxWidth="md"
        fullWidth
        scroll="body"
        PaperProps={{
          sx: {
            background: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
            m: 2,
          }
        }}
      >
        <AnimatePresence>
          {lightbox.open && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              sx={{
                position: 'relative',
                width: '100%',
                maxHeight: '85vh',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                background: '#081c15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleCloseLightbox}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  zIndex: 10,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.35)',
                    transform: 'rotate(90deg)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Main Lightbox Image */}
              <Box
                component="img"
                src={lightbox.image}
                alt={lightbox.title}
                sx={{
                  width: '100%',
                  height: { xs: 400, sm: 500, md: 550 },
                  objectFit: lightbox.image.includes('logo') ? 'contain' : 'cover',
                  p: lightbox.image.includes('logo') ? 4 : 0,
                  background: lightbox.image.includes('logo') ? '#faf9f6' : 'none',
                }}
              />

              {/* Floating glassmorphic info caption pane */}
              <Box
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  right: 24,
                  backgroundColor: 'rgba(8, 28, 21, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3 },
                  color: '#ffffff',
                  borderLeft: '4px solid #d97706',
                }}
              >
                <Typography variant="caption" sx={{ color: 'secondary.light', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                  {lightbox.concept}
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 1, color: '#ffffff' }}>
                  {lightbox.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                  {lightbox.desc}
                </Typography>
              </Box>
            </Box>
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
}
