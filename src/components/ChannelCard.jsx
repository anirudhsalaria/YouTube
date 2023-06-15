import React from 'react';
import { Box, CardContent, CardMedia, Typography  } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoProfilePicture } from '../utils/constants';

const ChannelCard = ({marginTop,channelDetail: {id: {channelId},snippet,statistics}}) => (
  
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs: '356px',md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop
    }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture }
          alt={snippet?.title}
          sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {snippet?.title || demoChannelTitle}
            <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
          </Typography>
          {statistics?.subscriberCount &&(
            <Typography>
              {parseInt(statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  
)

export default ChannelCard;
