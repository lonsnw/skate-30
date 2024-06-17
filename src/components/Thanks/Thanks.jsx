import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Typography } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles'

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer'

function Thanks() {
    const history = useHistory();

    return (
        <div>
            <MainWrap
                className='transition'>
                <Box 
                    display='flex'
                    height='70vh'
                    flexDirection='column'
                    justifyContent='center'
                    textAlign='center'>
                    <Typography variant="h5">Thanks for submitting!</Typography>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        gap={1}
                        margin='10px'>
                        <Button
                            type="button"
                            variant="contained"
                            name="try-again"
                            onClick={() => {history.push('/browse');}}>
                            Browse
                        </Button>
                    </Box>
                </Box>
            </MainWrap>
            <Box
                width='100vw'
                position='absolute'
                bottom='0'>
                <Footer />
            </Box>
        </div>
    )
}

export default Thanks;