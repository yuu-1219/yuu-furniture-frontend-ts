import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface BackButtonProps {
  text: string;
  link: string;
}


export default function BackButton({ text, link } : BackButtonProps) {
  return (
    <Link
      to={link}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0.5,
        }}
      >

        <Typography
          sx={{
            // fontSize: "16px",
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px"
            },
            margin: "0px 5px 0px 0px",
            lineHeight: 0.5
          }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            lineHeight: 0.5
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "small" }} />
        </Box>
      </Box>
    </Link>
  )
}