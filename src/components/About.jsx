import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import ParkIcon from '@mui/icons-material/Park';
import NightlightIcon from '@mui/icons-material/NightlightRound';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import SpaIcon from '@mui/icons-material/Spa';
import CabinIcon from '@mui/icons-material/Cabin';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HikingIcon from '@mui/icons-material/Hiking';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import TourIcon from '@mui/icons-material/Tour';
import WifiOffIcon from '@mui/icons-material/WifiOff';

export default function About() {
  const theme = useTheme();
  const [activeFacility, setActiveFacility] = React.useState(0);

  const facilityList = [
    { label: 'Pickup & Drop Assistance', img: '/dest_kodaikanal.png' },
    { label: 'Complimentary Breakfast', img: '/gallery_breakfast.png' },
    { label: 'Pre-Booked Meal Packages', img: '/camping_dining.png' },
    { label: 'Campfire Facilities', img: '/gallery_campfire.png' },
    { label: 'Trekking Assistance', img: '/kavunji_valley_gorge.jpg' },
    { label: 'Sightseeing Support', img: '/wayanad_hills.png' },
    { label: 'Nature Walks & Outdoor Activities', img: '/kavunji_mountain_view.jpg' },
  ];

  const pillars = [
    {
      img: '/kavunji_aframe_orange.jpg',
      num: '01',
      title: 'Digital Detox',
      desc: 'Step away from screens and notifications. In Kavunji, limited network invites you to rediscover the pace of real life.',
      icon: <DoNotDisturbOnIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }} />,
      accent: 'rgba(217,119,6,0.9)',
    },
    {
      img: '/kavunji_valley_gorge.jpg',
      num: '02',
      title: 'Nature First',
      desc: 'Mist-covered valleys, hidden waterfalls, and mountain trails — every stay reconnects you with the natural world.',
      icon: <ParkIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }} />,
      accent: 'rgba(27,99,60,0.9)',
    },
    {
      img: '/kavunji_aframe_black.jpg',
      num: '03',
      title: 'South Indian Cuisine',
      desc: 'Pre-booked meals with local flavours and fresh ingredients. Simple, honest food rooted in South Indian tradition.',
      icon: <OutdoorGrillIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }} />,
      accent: 'rgba(180,83,9,0.9)',
    },
    {
      img: '/kavunji_aframe_trees.jpg',
      num: '04',
      title: 'Campfire & Community',
      desc: 'Gather under the stars, share stories, and enjoy the quiet magic of a mountain night around the fire.',
      icon: <NightlightIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }} />,
      accent: 'rgba(67,56,202,0.85)',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 14 },
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Row 1: Brand Story Card ── */}
        <Grid container alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid
            item
            xs={12}
            md={10}
            sx={{ position: 'relative', zIndex: 3, mx: 'auto' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, sm: 5, md: 6 },
                  background: '#faf9f6',
                  borderRadius: 4,
                  border: '1px solid rgba(27, 67, 50, 0.06)',
                  boxShadow: { xs: '0 10px 30px rgba(0,0,0,0.03)', md: '15px 15px 40px rgba(27, 67, 50, 0.05)' },
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  sx={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: '2px', mb: 1.5, fontSize: '0.75rem' }}
                >
                  Simple Stays. Real Peace.
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ mb: 3, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, lineHeight: '1.2', fontWeight: 800 }}
                >
                  Born from a Passion for the Outdoors
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '1rem', lineHeight: '1.75', mb: 2.5 }}
                >
                  TrailNest was born from a passion for travel, adventure, nature, and hospitality. We are part of <strong>AMG IT Infrastructure and Services</strong>, with operations based in <strong>Bengaluru, Karnataka</strong> and <strong>Kannur, Kerala</strong>. Our founders come from technical and corporate backgrounds — years of demanding work schedules taught us the value of balance, meaningful experiences, and reconnecting with nature.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '1rem', lineHeight: '1.75', mb: 2.5 }}
                >
                  Instead of simply dreaming about a different way of life, we decided to build one. Our journey began in the technology sector before expanding into logistics, transportation, hospitality, and adventure tourism. Beyond business, adventure has always been part of our lives — from college days spent exploring forests, mountains, river crossings, and remote villages across South India.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '1rem', lineHeight: '1.75', mb: 4.5 }}
                >
                  Today, we proudly operate <strong>Mafia Spec Extreme 4×4 Club</strong>, a Bengaluru-based off-road community focused on adventure travel, responsible off-roading, and vehicle exploration. Our vision for TrailNest is simple: comfortable, value-driven stays without compromising quality, hospitality, or guest experience.
                </Typography>

                {/* CTA arrow */}
                <Box
                  component="a"
                  href="#destinations"
                  sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 2,
                    textDecoration: 'none', color: 'primary.main', fontWeight: 700,
                    fontSize: '0.85rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      '& .circle-arrow': { backgroundColor: 'primary.main', borderColor: 'primary.main', color: 'secondary.light' },
                      '& .arrow-icon': { transform: 'translateX(4px)' },
                    },
                  }}
                >
                  <Box
                    className="circle-arrow"
                    sx={{
                      width: 44, height: 44, borderRadius: '50%',
                      border: '1px solid rgba(27, 67, 50, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', color: 'primary.main',
                    }}
                  >
                    <EastIcon className="arrow-icon" sx={{ fontSize: '1.1rem', transition: 'transform 0.3s ease' }} />
                  </Box>
                  Find Out More
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* ── Divider ── */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 6 }}>
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
          <SpaIcon sx={{ mx: 2, color: 'secondary.main', fontSize: '1rem', transform: 'rotate(45deg)' }} />
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
        </Box>

        {/* ── Row 2: Four Pillars — Bento Photo Cards ── */}
        <Box sx={{ mt: 4 }}>

          {/* Section heading */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Typography sx={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'secondary.main', fontWeight: 700, fontSize: '0.72rem', mb: 1.5 }}>
                Our Philosophy
              </Typography>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2 }}>
                What We{' '}
                <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 400, color: 'secondary.main' }}>Believe In</Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Bento grid — 4 image cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.4fr 1fr 1fr 1.4fr' },
              gridTemplateRows: { xs: 'auto', md: '420px' },
              gap: 2,
            }}
          >
            {pillars.map((p, i) => (
              <Box
                key={i}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  minHeight: { xs: 300, md: '100%' },
                  cursor: 'default',
                  '&:hover img': { transform: 'scale(1.07)' },
                  '&:hover .pillar-overlay': { opacity: 0.8 },
                  '&:hover .accent-bar': { width: '60px' },
                }}
              >
                {/* Background photo */}
                <Box
                  component="img"
                  src={p.img}
                  alt={p.title}
                  sx={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                />

                {/* Dark gradient overlay */}
                <Box
                  className="pillar-overlay"
                  sx={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(4,12,8,0.95) 0%, rgba(4,12,8,0.5) 50%, rgba(4,12,8,0.12) 100%)',
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Content layer */}
                <Box
                  sx={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    p: { xs: 3, md: 3.5 }, zIndex: 2,
                  }}
                >
                  {/* Top: number + icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Cinzel", serif', fontSize: '2.8rem', fontWeight: 800,
                        color: 'rgba(255,255,255,0.1)', lineHeight: 1, userSelect: 'none',
                      }}
                    >
                      {p.num}
                    </Typography>
                    <Box
                      sx={{
                        width: 46, height: 46, borderRadius: '50%',
                        background: p.accent, backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 6px 24px ${p.accent}`,
                      }}
                    >
                      {p.icon}
                    </Box>
                  </Box>

                  {/* Accent bar */}
                  <Box
                    className="accent-bar"
                    sx={{
                      width: 36, height: 2.5, background: p.accent,
                      borderRadius: 2, mb: 1.5, transition: 'width 0.4s ease',
                    }}
                  />

                  {/* Title */}
                  <Typography
                    sx={{
                      color: '#ffffff', fontFamily: '"Cinzel", serif',
                      fontSize: { xs: '1rem', md: '1.05rem' }, fontWeight: 700,
                      letterSpacing: '0.5px', mb: 1, lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem',
                      lineHeight: 1.65, fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {p.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Divider ── */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 8 }}>
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
          <CabinIcon sx={{ mx: 2, color: 'secondary.main', fontSize: '1rem' }} />
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
        </Box>

        {/* ── Accommodation Section ── */}
        <Box
          id="accommodation"
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'secondary.main', fontWeight: 700, fontSize: '0.72rem', mb: 1.5 }}>
              Our Properties
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2 }}>
              Accommodation at{' '}
              <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 400, color: 'secondary.main' }}>Kavunji</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mt: 2, lineHeight: 1.7 }}>
              Located in the hills of Kavunji, Kodaikanal, our thoughtfully designed properties offer guests an opportunity to reconnect with nature while enjoying comfortable stays.
            </Typography>
          </Box>

          {/* ── Row 1: Hero Feature Card — Misty Night Cabin ── */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: { xs: 320, sm: 400, md: 500 },
              cursor: 'pointer',
              boxShadow: '0 20px 60px rgba(4,16,10,0.3)',
              '&:hover .hero-img': { transform: 'scale(1.04)' },
            }}
          >
            <Box className="hero-img" sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/kavunji_misty_night.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%', transition: 'transform 0.9s ease' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(4,16,10,0.88) 0%, rgba(4,16,10,0.35) 60%, transparent 100%)' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,16,10,0.75) 0%, transparent 55%)' }} />
            <Box sx={{ position: 'absolute', top: 24, left: 24, display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
              <Box sx={{ backgroundColor: 'secondary.main', color: '#fff', px: 2, py: 0.5, borderRadius: '20px', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Now Open</Box>
              <Box sx={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', px: 2, py: 0.5, borderRadius: '20px', fontSize: '0.63rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Kavunji · 1,920m</Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: { xs: 3, sm: 4, md: 5 }, maxWidth: { xs: '100%', md: '58%' } }}>
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', mb: 1 }}>Signature Experience · 01</Typography>
              <Typography sx={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' }, lineHeight: 1.15, mb: 1.5, textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
                A Night in the<br />Mountain Mist
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: { xs: '0.88rem', md: '0.96rem' }, lineHeight: 1.7, mb: 2.5, display: { xs: 'none', sm: 'block' } }}>
                Wake above the clouds at 1,920m. Our A-Frame cabins glow warmly through the mist — a private sanctuary for couples seeking the extraordinary.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
                {['4 A-Frame Cabins', 'Waterfall Views', 'Couple Retreats'].map((t) => (
                  <Box key={t} sx={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.9)', px: 1.8, py: 0.45, borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600 }}>{t}</Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', right: { xs: 20, md: 48 }, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 3, alignItems: 'center' }}>
              {[{ num: '4', label: 'Cabins' }, { num: '30', label: 'Max Guests' }, { num: '1920', label: 'Metres' }].map((s) => (
                <Box key={s.label} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#fff', fontFamily: '"Cinzel", serif', fontWeight: 800, fontSize: '1.9rem', lineHeight: 1 }}>{s.num}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', mt: 0.4 }}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Row 2: Three Property Cards ── */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: { xs: 2, md: 2.5 }, mt: 2.5 }}>
            {[
              { img: '/aframe_waterfall_dawn.png', tag: 'Signature Stay', tagBg: 'secondary.main', num: '02', title: 'A-Frame Towers', subtitle: 'Near Waterfall Viewpoints', desc: 'Perched near scenic waterfall viewpoints — perfect for couples seeking a private nature retreat.', capacity: '2 Guests · Couple', bgPos: 'center center' },
              { img: '/aframe_modern_mountain.png', tag: 'Modern Comfort', tagBg: '#1b4332', num: '03', title: 'A-Frame Towers', subtitle: 'Near Poondi · Modern', desc: 'Contemporary comforts blending seamlessly into the mountain landscape with clean interiors.', capacity: '2 Guests · Couple', bgPos: 'center 30%' },
              { img: '/kavunji_group_panorama.png', tag: 'Group Stay', tagBg: 'rgba(27,67,50,0.85)', num: '04', title: 'Group Accommodation', subtitle: 'Up to 30 Guests', desc: 'Comfortable facilities for groups with sweeping mountain ridgeline views and gathering areas.', capacity: 'Up to 30 Guests', bgPos: 'center 50%' },
            ].map((p, i) => (
              <Box
                key={i}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                sx={{
                  borderRadius: '20px', overflow: 'hidden', position: 'relative',
                  height: { xs: 280, sm: 310, md: 360 },
                  cursor: 'pointer', boxShadow: '0 8px 30px rgba(4,16,10,0.18)',
                  '&:hover .card-img': { transform: 'scale(1.08)' },
                  '&:hover .card-tint': { opacity: 1 },
                }}
              >
                <Box className="card-img" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: p.bgPos, transition: 'transform 0.7s ease' }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,12,8,0.95) 0%, rgba(4,12,8,0.38) 55%, rgba(4,12,8,0.08) 100%)' }} />
                <Box className="card-tint" sx={{ position: 'absolute', inset: 0, background: 'rgba(27,67,50,0.15)', opacity: 0, transition: 'opacity 0.4s ease' }} />
                <Typography sx={{ position: 'absolute', top: 12, right: 16, fontFamily: '"Cinzel", serif', fontWeight: 900, fontSize: '3.2rem', color: 'rgba(255,255,255,0.05)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{p.num}</Typography>
                <Box sx={{ position: 'absolute', top: 16, left: 16, backgroundColor: p.tagBg, color: '#fff', px: 1.5, py: 0.35, borderRadius: '20px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{p.tag}</Box>
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 0.5 }}>{p.subtitle}</Typography>
                  <Typography sx={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: { xs: '1.15rem', md: '1.3rem' }, lineHeight: 1.25, mb: 0.8 }}>{p.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', lineHeight: 1.6, mb: 1.5, display: { xs: 'none', sm: 'block' } }}>{p.desc}</Typography>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px', px: 1.4, py: 0.35 }}>
                    <PeopleIcon sx={{ fontSize: '0.68rem', color: 'secondary.light' }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.7px' }}>{p.capacity}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ── Row 3: Traditional Mud House — Wide Banner ── */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            sx={{ mt: 2.5, borderRadius: '24px', overflow: 'hidden', position: 'relative', height: { xs: 300, sm: 260, md: 240 }, boxShadow: '0 12px 40px rgba(4,16,10,0.2)', cursor: 'pointer', '&:hover .mud-bg': { transform: 'scale(1.04)' } }}
          >
            <Box className="mud-bg" sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/kavunji_mud_house.png)', backgroundSize: 'cover', backgroundPosition: 'center 40%', transition: 'transform 0.8s ease' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(4,12,8,0.93) 0%, rgba(4,12,8,0.62) 45%, rgba(4,12,8,0.1) 100%)' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,12,8,0.5) 0%, transparent 50%)' }} />
            <Box sx={{ position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(217,119,6,0.85)', backdropFilter: 'blur(6px)', color: '#fff', px: 1.8, py: 0.4, borderRadius: '20px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Heritage Stay · 05</Box>
            <Box sx={{ position: 'absolute', top: '50%', left: { xs: 24, sm: 36, md: 52 }, transform: 'translateY(-50%)', maxWidth: { xs: '85%', sm: '55%', md: '48%' } }}>
              <Typography sx={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', mb: 0.8 }}>Traditional · Authentic · Heritage</Typography>
              <Typography sx={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: { xs: '1.6rem', sm: '2rem', md: '2.3rem' }, lineHeight: 1.15, mb: 1.2 }}>Traditional Mud House</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.82rem', md: '0.88rem' }, lineHeight: 1.7, mb: 2, display: { xs: 'none', sm: 'block' } }}>
                An authentic mud house rooted in local architecture of the Western Ghats — a truly immersive heritage countryside experience.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '20px', px: 1.5, py: 0.4 }}>
                  <PeopleIcon sx={{ fontSize: '0.68rem', color: 'secondary.light' }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Up to 15 Guests</Typography>
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, backgroundColor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', px: 1.5, py: 0.4 }}>
                  <NaturePeopleIcon sx={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)' }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Group Heritage Stay</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ── Campfire Dark Banner ── */}
          <Box
            sx={{
              mt: 2.5, p: { xs: 3, md: 4 }, borderRadius: '20px',
              background: 'linear-gradient(135deg, #081c15 0%, #0d2b1e 100%)',
              backgroundImage: 'url(/kavunji_campfire_night.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 60%',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2.5, sm: 3 },
              boxShadow: '0 8px 24px rgba(4,16,10,0.2)',
            }}
          >
            {/* Dark overlay for readability over photo */}
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(4,12,8,0.88) 0%, rgba(4,12,8,0.7) 100%)', borderRadius: '20px' }} />
            <Box sx={{ position: 'relative', zIndex: 1, width: 54, height: 54, borderRadius: '50%', flexShrink: 0, background: 'radial-gradient(circle, rgba(217,119,6,0.4) 0%, rgba(217,119,6,0.08) 100%)', border: '1px solid rgba(217,119,6,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LocalFireDepartmentIcon sx={{ color: 'secondary.main', fontSize: '1.55rem' }} />
            </Box>
            <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.05rem' }, mb: 0.5, fontFamily: '"Playfair Display", serif' }}>Campfire Areas — Included at Every Property</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.7 }}>Relax under the stars, share stories, and enjoy the peaceful mountain atmosphere. Every property includes a dedicated campfire gathering area.</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 2.5 }, flexShrink: 0, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              {['Every Evening', 'All Properties', 'All Ages'].map((t) => (
                <Typography key={t} sx={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>




        {/* ── Divider ── */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 8 }}>
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
          <SpaIcon sx={{ mx: 2, color: 'secondary.main', fontSize: '1rem', transform: 'rotate(45deg)' }} />
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
        </Box>

        {/* ── About Kavunji + Sustainable Travel ── */}
        <Box sx={{ mb: 10, maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <Typography sx={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'secondary.main', fontWeight: 700, fontSize: '0.72rem', mb: 1.5 }}>
              The Destination
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 800, mb: 3, fontFamily: '"Playfair Display", serif' }}>
              About Kavunji
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.05rem' }}>
              Kavunji is a peaceful panchayat village located on the western edge of the Western Ghats in Kodaikanal, Tamil Nadu. Known for its terrace farms, mist-covered valleys, waterfalls, and cool mountain climate, it offers visitors an authentic countryside experience away from crowded tourist destinations.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
              Located approximately <strong>35 km from Kodaikanal town</strong> and at an elevation of around <strong>1,920 metres above sea level</strong>, Kavunji remains one of the region's hidden gems — a place where time slows down and nature takes centre stage.
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                mt: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #f0f7f2 0%, #fefcf5 100%)',
                border: '1px solid rgba(27,67,50,0.1)',
                borderLeft: '4px solid',
                borderLeftColor: 'secondary.main',
                textAlign: 'left',
                display: 'inline-block',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <WifiOffIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem' }}>
                  Sustainable Travel
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                As a remote mountain village, Kavunji may have limited mobile network and electricity at times. We encourage guests to embrace this as an opportunity to <strong>disconnect from screens and reconnect with nature</strong>. We kindly request all visitors to help preserve Kavunji's beauty by respecting the local environment and avoiding littering.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* ── Facilities (Interactive Accordion) Section ── */}
      <Box sx={{ background: '#faf9f6', py: { xs: 8, md: 12 }, mb: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography sx={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'secondary.main', fontWeight: 700, fontSize: '0.72rem', mb: 1.5 }}>
              Amenities & Services
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2 }}>
              Everything You Need
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              height: { xs: 'auto', md: '600px' },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {facilityList.map((facility, index) => {
              const isActive = activeFacility === index;
              return (
                <Box
                  key={index}
                  onMouseEnter={() => setActiveFacility(index)}
                  onClick={() => setActiveFacility(index)}
                  sx={{
                    position: 'relative',
                    flex: { xs: 'none', md: isActive ? 5 : 1 },
                    height: { xs: isActive ? 280 : 80, md: '100%' },
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.15)' : '0 4px 10px rgba(0,0,0,0.05)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: isActive
                        ? 'linear-gradient(to top, rgba(4, 16, 10, 0.9) 0%, rgba(4, 16, 10, 0) 60%)'
                        : 'rgba(4, 16, 10, 0.5)',
                      transition: 'all 0.5s ease',
                      zIndex: 1,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={facility.img}
                    alt={facility.label}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 6s ease-out',
                    }}
                  />
                  {/* Content Container */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      p: { xs: 2.5, md: 3 },
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Vertical Text (Visible only on desktop when inactive) */}
                    <Typography
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        bottom: 90, // Positioned above the icon
                        left: 24, // Aligned with the p:3 padding
                        ml: '13px', // Centered relative to the 44px icon
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        opacity: isActive ? 0 : 1,
                        visibility: isActive ? 'hidden' : 'visible',
                        transition: 'opacity 0.4s ease',
                        whiteSpace: 'nowrap',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {facility.label}
                    </Typography>

                    {/* Bottom Row: Icon + Horizontal Text */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 36, md: 44 },
                          height: { xs: 36, md: 44 },
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'secondary.main' : 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(4px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.4s ease',
                          border: '1px solid',
                          borderColor: isActive ? 'secondary.main' : 'rgba(255,255,255,0.3)',
                        }}
                      >
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.8rem', md: '0.9rem' }, color: '#fff' }}>
                          0{index + 1}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontSize: { xs: '1.1rem', md: '1.4rem' },
                          fontWeight: 700,
                          color: 'white',
                          opacity: isActive ? 1 : { xs: 1, md: 0 },
                          width: isActive ? 'auto' : { xs: 'auto', md: 0 },
                          overflow: 'hidden',
                          transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                          transition: 'all 0.5s ease',
                          transitionDelay: isActive ? '0.2s' : '0s',
                          whiteSpace: { xs: 'normal', md: 'nowrap' },
                          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        }}
                      >
                        {facility.label}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">

        {/* ── Upcoming Projects ── */}
        <Box sx={{ mt: 6, mb: 6 }}>
          <Typography sx={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'secondary.main', fontWeight: 700, fontSize: '0.72rem', mb: 1.5, textAlign: 'center' }}>
            Upcoming Projects
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.2, textAlign: 'center', mb: 2.5 }}>
            Expanding Across South India
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 5, lineHeight: 1.7 }}>
            As part of our long-term vision, TrailNest continues to expand across South India with unique hospitality experiences inspired by local culture, nature, and adventure.
          </Typography>

          <Grid container spacing={3} alignItems="stretch">
            {[
              {
                title: 'Woodsman Craft by TrailNest',
                location: 'Lovedale, Ooty, Tamil Nadu',
                desc: 'A nature-inspired retreat designed around the charm of the Nilgiris, offering peaceful stays surrounded by forests, misty landscapes, and mountain views.',
                img: '/upcoming_ooty.png'
              },
              {
                title: 'Amber by TrailNest',
                location: 'Madikeri (Coorg), Karnataka',
                desc: 'A premium countryside escape in the heart of Coorg, combining plantation experiences, scenic viewpoints, and comfortable accommodation.',
                img: '/upcoming_coorg.png'
              },
              {
                title: 'Cozy Huts by TrailNest',
                location: 'Meppadi, Wayanad, Kerala',
                desc: 'A tranquil hillside getaway featuring cozy stays, nature trails, and immersive experiences amidst the beautiful landscapes of Wayanad.',
                img: '/upcoming_wayanad.png'
              }
            ].map((project, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  elevation={0}
                  sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid rgba(27,67,50,0.06)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 15px 40px rgba(27,67,50,0.1)',
                    },
                    '&:hover .upc-img': {
                      transform: 'scale(1.08)',
                    }
                  }}
                >
                  {/* Image Top Half */}
                  <Box sx={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                    <Box
                      className="upc-img"
                      component="img"
                      src={project.img}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease',
                      }}
                    />
                    {/* Status Badge */}
                    <Box sx={{ position: 'absolute', top: 16, right: 16, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', color: 'secondary.main', px: 1.5, py: 0.4, borderRadius: '20px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      Coming Soon
                    </Box>
                  </Box>

                  {/* Content Bottom Half */}
                  <Box sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'secondary.main', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', mb: 1 }}>
                      📍 {project.location}
                    </Typography>
                    <Typography sx={{ color: 'primary.main', fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: '1.3rem', lineHeight: 1.25, mb: 1.5 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1 }}>
                      {project.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 5, p: 3, borderRadius: '20px', background: 'linear-gradient(135deg, #f8fbf9 0%, #fefcf5 100%)', border: '1px solid rgba(27,67,50,0.08)', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.7, mb: 1.5 }}>
              Our goal is to create distinctive destinations across Kerala, Karnataka, and Tamil Nadu while maintaining the same values that define TrailNest:
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontStyle: 'italic', mb: 1.5 }}>
              "Simple Stays. Real Peace."
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.7, mb: 4 }}>
              More destinations are currently under development and will be announced soon.
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
