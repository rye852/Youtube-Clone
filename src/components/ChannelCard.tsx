import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { dataFromApiType } from './Videos';
import { Link } from 'react-router-dom';
import CheckCercle from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../utils/constans';
type PropsCard = {
  channel: dataFromApiType;
  paddingTop?: string;
};
const ChannelCard = ({ channel, paddingTop }: PropsCard) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 11,
        boxShadow: 'none',
        borderRadius: '20px',
        width: { sm: '320px', xs: '100%' },
        height: '326px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        paddingTop,
      }}>
      <Link
        to={
          channel.id
            ? `/channel/${channel.id.channelId}`
            : `/channel/${channel.id}`
        }>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}>
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
            variant="h6">
            {channel.snippet?.channelTitle || channel.snippet?.title}
            <CheckCercle
              sx={{
                color: 'gray',
                fontSize: 14,
                ml: '5px',
                transform: 'translateY(2px)',
              }}
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="subtitle2">
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
