import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2,0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};

export default function TextRating() {
  const value = 4.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
      sx={{
        color:"#BC172F",
        fontSize: '15px',
      }}
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="15px" />}
      />
      <Box sx={{ ml: 0.5, fontSize: '12px', fontWeight:'350' }}>{labels[value]}</Box>
    </Box>
  );
}