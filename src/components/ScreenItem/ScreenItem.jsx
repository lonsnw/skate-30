// MUI imports
import { Paper, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

function ScreenItem() {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
      }));

    return (
        <Item />
    )
}

export default ScreenItem;