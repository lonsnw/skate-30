import React from 'react';

// MUI imports
import { Box, Chip, Container, Typography } from '@mui/material';

function About() {
  return (
    <div className="about">
      <Container>
        <Box 
          sx={{ height: '50vh' }}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          marginTop='40px' >
            <Box
              marginTop='34vh' >
              <Typography variant="h3">Technologies used</Typography>
              <Typography variant="h5"><li>Material UI</li></Typography>
              <Typography variant="h5"><li>styled-components</li></Typography>
              <Typography variant="h5"><li>Moment</li></Typography>
              <Typography variant="h5"><li>React</li></Typography>
              <Typography variant="h5"><li>Redux</li></Typography>
              <Typography variant="h5"><li>Sagas</li></Typography>
              <Typography variant="h5"><li>HTML</li></Typography>
              <Typography variant="h5"><li>CSS</li></Typography>
              <Typography variant="h5"><li>JavaScript</li></Typography>
              <Typography variant="h5"><li>Node.js</li></Typography>
              <Typography variant="h5"><li>Express</li></Typography>
              <Typography variant="h5"><li>PostgreSQL</li></Typography>

              <Typography variant="h3">Tools used</Typography>
              <Typography variant="h5"><li>Canva</li></Typography>
              <Typography variant="h5"><li>DB Designer</li></Typography>
              <Typography variant="h5"><li>Figma</li></Typography>
              <Typography variant="h5"><li>GitHub</li></Typography>
              <Typography variant="h5"><li>Google Workspace</li></Typography>

              <Typography variant="h3">Future state tech and tools</Typography>
              <Typography variant="h5"><li>Google Maps API</li></Typography>
              <Typography variant="h5"><li>Hostinger or Heroku</li></Typography>

              <Box
                margin='auto'
                width='50vw'
                marginTop='30px'>
                  <Typography variant='h5'>Hero image is a photograph of a puck on a frozen lake in NY.</Typography>
              </Box>
            </Box>
        </Box>
      </Container>
    </div>
  );
}

export default About;
