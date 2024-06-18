import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Typography } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles'

function NoPast() {
    const history = useHistory();

    return (
        <MainWrap
            className='transition'>
            <Box 
                display='flex'
                height='70vh'
                flexDirection='column'
                justifyContent='center'
                textAlign='center'>
                <Typography variant="h5">No entries were found.</Typography>
                <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                gap={1}
                margin='10px'>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    name="input"
                    onClick={() => {history.push('/input/location');}}>
                    Add event
                </Button>
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
    )
}

export default NoPast;