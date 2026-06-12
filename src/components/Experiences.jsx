import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FitnessCenterIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';

const activities = [
  {
    title: 'Guided Mountain Trekking',
    category: 'Nature Trails',
    duration: 'Half Day',
    image: '/kavunji_valley_gorge.jpg',
    desc: 'Explore Kavunji\'s breathtaking mountain terrain with our local trekking guides. Navigate hidden nature trails, cross cool mountain streams, and discover viewpoints untouched by tourist crowds.',
    difficulty: 'Easy to Moderate',
  },
  {
    title: 'Waterfall & Village Exploration',
    category: 'Local Discovery',
    duration: '3–4 Hours',
    image: '/kavunji_mountain_view.jpg',
    desc: 'Visit hidden waterfalls and walk through the traditional terrace farms of Kavunji village. Experience authentic countryside life in one of the Western Ghats\' most secluded panchayat settlements.',
    difficulty: 'Easy',
  },
  {
    title: 'Sunrise & Sunset Viewpoints',
    category: 'Scenic Experiences',
    duration: 'Morning / Evening',
    image: '/kavunji_aframe_black.jpg',
    desc: 'Wake before dawn and hike to the scenic ridge viewpoints above Kavunji. Watch golden light break over the mist-draped valleys of the Western Ghats at 1,920 metres above sea level.',
    difficulty: 'All Levels',
  },
  {
    title: 'Campfire Nights Under the Stars',
    category: 'Evening Experience',
    duration: 'Every Evening',
    image: '/kavunji_aframe_trees.jpg',
    desc: 'Gather around the dedicated campfire area as the mountain night settles in. Share stories, enjoy the crisp mountain air, and experience the deep silence of a life temporarily free from screens and schedules.',
    difficulty: 'All Ages',
  },
];

export default function Experiences() {
  const theme = useTheme();

  return (
    <Box
      id="experiences"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#ffffff',
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
            Kavunji Experiences
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, mb: 2 }}>
            What to Do Here
          </Typography>

          {/* Leaf Divider */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
            <SpaIcon sx={{ mx: 1.5, color: 'secondary.main', fontSize: '1.2rem', transform: 'rotate(-45deg)' }} />
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Our team is happy to guide guests through some of the region\'s most beautiful experiences. From trekking and waterfall visits to village walks and scenic viewpoints — each day at Kavunji offers something memorable.
          </Typography>
        </Box>

        {/* Activities Grid */}
        <Grid container spacing={4}>
          {activities.map((act, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Grid item xs={12} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                      overflow: 'hidden',
                      borderRadius: 4,
                      border: '1px solid rgba(27, 67, 50, 0.05)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
                      height: { md: 280 },
                      // Side highlight matching layout
                      borderLeft: isEven ? `4px solid ${theme.palette.secondary.main}` : '1px solid rgba(27, 67, 50, 0.05)',
                      borderRight: !isEven ? `4px solid ${theme.palette.secondary.main}` : '1px solid rgba(27, 67, 50, 0.05)',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(27, 67, 50, 0.08)',
                        '& .activity-media': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    {/* Image Part */}
                    <Box
                      sx={{
                        width: { xs: '100%', md: '45%' },
                        height: { xs: 220, md: '100%' },
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Box
                        className="activity-media"
                        component="img"
                        src={act.image}
                        alt={act.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: isEven ? 16 : 'auto',
                          right: !isEven ? 16 : 'auto',
                          backgroundColor: 'rgba(8, 28, 21, 0.85)',
                          color: '#ffffff',
                          px: 2,
                          py: 0.6,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {act.category}
                      </Box>
                    </Box>

                    {/* Content Part */}
                    <CardContent
                      sx={{
                        width: { xs: '100%', md: '55%' },
                        p: { xs: 3, sm: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        background: '#faf9f6', // Warm cream paper background
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="primary"
                        sx={{
                          fontWeight: 800,
                          lineHeight: 1.3,
                          mb: 1.5,
                          fontFamily: '"Playfair Display", serif',
                          fontSize: { xs: '1.2rem', sm: '1.4rem' }
                        }}
                      >
                        {act.title}
                      </Typography>
                      
                      {/* Tags */}
                      <Box sx={{ display: 'flex', gap: 3, mb: 2.5, color: 'text.secondary' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                          <AccessTimeIcon sx={{ fontSize: '0.95rem', color: 'secondary.main' }} />
                          <Typography variant="caption" sx={{ fontWeight: 650, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {act.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                          <FitnessCenterIcon sx={{ fontSize: '0.95rem', color: 'secondary.main' }} />
                          <Typography variant="caption" sx={{ fontWeight: 650, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {act.difficulty}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3 }}>
                        {act.desc}
                      </Typography>

                      <Box>
                        <Button
                          variant="text"
                          color="secondary"
                          endIcon={<ExploreIcon />}
                          sx={{
                            p: 0,
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              color: 'secondary.dark',
                              transform: 'translateX(3px)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          Inquire Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
