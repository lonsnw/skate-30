import { useSelector } from 'react-redux';

// MUI imports
import { Box } from '@mui/material';

function PastBar(){
    const user = useSelector((store) => store.user);

    return(
        <Box
            textAlign='center'>
            <h2>{user.name}'s past events</h2>
        </Box>
    )
}

export default PastBar;