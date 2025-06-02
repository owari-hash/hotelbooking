import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Paper
        sx={{
          pb: 10,
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <m.div variants={varFade().inUp}>
          <Image
            alt="luxury hotel"
            src="/assets/images/hotel/hero_4.jpg"
            sx={{ mx: 'auto', borderRadius: 2, boxShadow: 3 }}
          />
        </m.div>

        <Box sx={{ mt: 3, mx: 'auto', px: 3, maxWidth: 560 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              ҮЙЛЧИЛГЭЭНИЙ ТӨРӨЛ
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ my: 3 }}>
              <Box component="span" sx={{ color: 'primary.main' }}>
                Тансаг зэрэглэлийн
              </Box>{' '}
              зочид буудал
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ color: 'text.secondary' }}>
              5 одтой тансаг зэрэглэлийн зочид буудлууд. Өндөр зэрэглэлийн үйлчилгээ, тав тухтай
              орчин, олон улсын стандартад нийцсэн өрөөнүүд. Та манай системээр хамгийн хямд үнээр
              захиалга хийх боломжтой.
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack spacing={3} direction="row" justifyContent="center" sx={{ mt: 5 }}>
              <Box sx={{ textAlign: 'center', px: 3 }}>
                <Iconify
                  icon="solar:clock-circle-bold"
                  sx={{
                    mb: 2,
                    width: 40,
                    height: 40,
                    color: 'primary.main',
                  }}
                />
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  24/7
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Үйлчилгээ
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', px: 3 }}>
                <Iconify
                  icon="solar:star-bold"
                  sx={{
                    mb: 2,
                    width: 40,
                    height: 40,
                    color: 'primary.main',
                  }}
                />
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  5★
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Зэрэглэл
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', px: 3 }}>
                <Iconify
                  icon="solar:shield-check-bold"
                  sx={{
                    mb: 2,
                    width: 40,
                    height: 40,
                    color: 'primary.main',
                  }}
                />
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  100%
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Баталгаат
                </Typography>
              </Box>
            </Stack>
          </m.div>
        </Box>
      </Paper>
    </Container>
  );
}
