import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { dataFromApiType } from './Videos';
import { Videos } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';
interface dataType {
  items: dataFromApiType[];
}
const VideoDetails = () => {
  const [vidioDetails, setVideoDetails] = useState<dataFromApiType>(
    {} as dataFromApiType
  );
  const [vidioSuggested, setVidioSuggested] = useState<dataFromApiType[]>(
    [] as dataFromApiType[]
  );
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data: dataType) => setVideoDetails(data.items[0]))
      .catch(() => setErrMsg('Network Error'));
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data: dataType) => setVidioSuggested(data.items))
      .catch(() => setErrMsg('Network Error'));
  }, [id]);
  console.log(vidioDetails);

  if (Object.keys(vidioDetails).length === 0)
    return (
      <Box sx={{ height: 'calc(92vh - 32px)', background: '#000' }}>
        <Typography variant="h3" color={'error'}>
          Loading
        </Typography>
      </Box>
    );

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = vidioDetails;

  return (
    <Box minHeight={'calc(92vh - 32px)'}>
      {!errMsg && vidioDetails ? (
        <>
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box flex={1}>
              <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  className="react-player"
                  controls
                />
                <Typography
                  color={'white'}
                  variant="h5"
                  fontWeight={'bold'}
                  p={2}>
                  {title}
                </Typography>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{ color: '#fff' }}
                  py={1}
                  px={2}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      variant={'h6'}
                      color={'#fff'}>
                      {channelTitle}
                      <CheckCircleIcon
                        sx={{
                          fontSize: '14px',
                          transform: 'translate(5px, 1px)',
                        }}
                      />
                    </Typography>
                  </Link>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box
              px={2}
              py={{ md: 1, xs: 5 }}
              justifyContent={'center'}
              alignItems={'center'}>
              <Videos direction="column" videos={vidioSuggested} />
            </Box>
          </Stack>
        </>
      ) : (
        <Typography variant="h2" component={'p'}>
          {errMsg}
        </Typography>
      )}
    </Box>
  );
};

export default VideoDetails;
