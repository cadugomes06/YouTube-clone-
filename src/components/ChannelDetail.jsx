import { React, useEffect, useState} from 'react'
import {Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { ChannelCard, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
   const [ channelDetail, setChannelDetail ] = useState()
   const [ videos, setVideos ] = useState(null)

   const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh' >
       <Box>
         <div style={{ 
          backgroundColor: '#4158D0',
          backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
          zIndex: 10,
          height: '300px'          
         }}
         />
            <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
       </Box>
       <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail