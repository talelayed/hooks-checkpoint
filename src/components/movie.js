import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import StarIcon from '@mui/icons-material/Star';

export default function Movie({movie}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.name}
          </Typography>
           <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.rating}<StarIcon sx={{ fontSize: 15 }}/>
          </Typography> 
        </CardContent>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
      </Box> 
      <CardMedia
        component="img"
        sx={{ height: "100%" ,maxWidth:"100%" , maxHeight:180}}
        image={movie.imgUrl}
        alt="Live from space album cover"
      />
    </Card>
  );

}