import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Your&nbsp;next&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              great hire
            </Typography>
          </Typography>

          {/* Subheading (now h2) */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '1.25rem',
              fontWeight: 400,
              width: { sm: '100%', md: '80%' },
            }}
          >
            You're on a mission to build exceptional tech teams—and I’m here to make it easier 
            for you. As a passionate junior developer, I bring fresh ideas, problem-solving 
            skills, automation, and a commitment to delivering results. Let’s work together to turn your 
            challenges into opportunities, and ensure your team thrives.
          </Typography>

          {/* Input + CTA Button */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Enter your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
            >
              Go now
            </Button>
          </Stack>

          {/* Terms */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>

          {/* Hero image */}
          <Box
            component="img"
            src="/images/z05Sr.png"
            alt="Team working together"
            sx={{
              width: '100%',
              maxWidth: 600,
              borderRadius: 2,
              mt: 4,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
