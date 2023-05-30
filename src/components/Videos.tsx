import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';
export interface dataFromApiType {
  kind: string;
  id: { [key: string]: any };
  snippet: { [key: string]: any };
  statistics: { [key: string]: any };
}
type vediosProp = {
  videos: dataFromApiType[];
  direction?: 'row' | 'column';
};

const Videos = ({ videos, direction = 'row' }: vediosProp) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row', md: direction }}
      flexWrap={'wrap'}
      justifyContent={'center'}
      gap={2}>
      {videos.map((item, index) => (
        <Box key={index} alignItems={'center'} justifyContent={'center'}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
