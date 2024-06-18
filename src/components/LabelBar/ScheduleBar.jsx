import { useSelector } from 'react-redux';

// MUI imports
import { Box } from '@mui/material';

function ScheduleBar(){
    const user = useSelector((store) => store.user);

    return(
        <Box
            textAlign='center'>
            <h2>{user.name}'s schedule</h2>
        </Box>
    )
}

export default ScheduleBar;