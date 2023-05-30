import React from 'react';
import { dataFromApiType } from './Videos';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCercle from '@mui/icons-material/CheckCircle';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
} from '../utils/constans';
type PropsCard = {
  video: dataFromApiType;
};

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: PropsCard) => {
  return (
    <Card
      sx={{
        width: { sm: '320px', xs: '80vw' },
        boxShadow: 'none',
        borderRadius: 0,
        margin: "auto"
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{ height: 180, width: '100%', objectFit: 'cover' }}
          image={snippet?.thumbnails?.high?.url as string}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={'bold'} color={'white'}>
            {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
            variant="subtitle2"
            fontWeight={'bold'}
            color={'gray'}>
            {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCercle sx={{ color: 'gray', fontSize: 12, ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
