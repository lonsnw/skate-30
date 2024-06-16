// MUI imports
import { Box, Stack, Typography } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles';

// Loading bar import
import BarLoader from 'react-spinners/BarLoader'

function Loading() {

  return (
      <MainWrap className="loading">
        <Box
          marginTop='30vh'
          minHeight='80vh'
          display='flex'
          flexDirection='column'
          alignItems='center' >
          <Typography variant="h6">Loading</Typography>
          <Stack 
            sx={{ width: '100%' }} 
            spacing={2}
            alignItems='center' >
            <BarLoader color="#8F220F" />
            <BarLoader color="#213345" />
            <BarLoader color="#8F220F" />
            <BarLoader color="#213345" />
            <BarLoader color="#8F220F" />
          </Stack>
        </Box>
      </MainWrap>
  );
}

export default Loading;
