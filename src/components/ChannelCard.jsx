import React from 'react'
import { Box, CardContent, CardMedia, Typography  } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';

const ChannelCard = (channelDetail) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
