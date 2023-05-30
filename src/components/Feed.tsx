import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';
import { dataFromApiType } from './Videos';

const Feed = () => {
  const [selectedCategorie, setSelectedCategorie] = useState<string>('');
  const [videos, setVideos] = useState<dataFromApiType[]>(
    [] as dataFromApiType[]
  );
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategorie}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategorie]);
  const date: Date = new Date();
  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
        overflow: 'hidden',
        height: 'calc(92vh - 32px)',
      }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '100%' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}>
        <SideBar
          selectedCategorie={selectedCategorie}
          setSelectedCategorie={setSelectedCategorie}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
          className="copyright">
          Copyright {date.getFullYear()} jorye
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
          scrollbarWidth: 'thin',
        }}>
        <Typography
          variant="h4"
          fontWeight={'bold'}
          mb={2}
          sx={{ color: 'white' }}>
          {selectedCategorie} <span style={{ color: '#fc1503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
