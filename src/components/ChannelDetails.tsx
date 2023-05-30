import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Box, Typography, Container } from '@mui/material';
import { Videos, ChannelCard } from '../components';
import { dataFromApiType } from './Videos';
const ChannelDetails = () => {
  interface channelType {
    kind: string;
    items: dataFromApiType[];
    pageInfo: { [key: string]: any };
  }
  const [channelDetails, setChannelDeatils] = useState<dataFromApiType>(
    {} as dataFromApiType
  );
  const [error, setError] = useState<null | string>(null);
  const [channelVideos, setChannelVideos] = useState<dataFromApiType[]>(
    [] as dataFromApiType[]
  );
  const { channelId } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${channelId}`)
      .then((data: channelType) => setChannelDeatils(data.items[0]))
      .catch(() => setError('Network Error'));
    fetchFromApi(`search?channelId=${channelId}&part=snippet&order=date`)
      .then((data) => setChannelVideos(data?.items))
      .catch(() => setError('Network Error'));
  }, [channelId]);
  console.log(channelVideos);
  return (
    <Box minHeight={'95vh'} sx={{ scrollbarWidth: 'thin', overflow: 'auto' }}>
      {Object.keys(channelDetails).length > 0 &&
      channelVideos.length > 0 &&
      !error ? (
        <>
          <Box>
            <div
              style={{
                position: 'absolute',

                width: '100%',
                zIndex: 10,
                height: '200px',
                background:
                  'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,25,72,0.9976190305223652) 100%',
              }}
            />
          </Box>

          <ChannelCard channel={channelDetails} paddingTop="50px" />
          <Videos videos={channelVideos} />
        </>
      ) : (
        <Typography variant="h2" component={'p'} color={'error'}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default ChannelDetails;
