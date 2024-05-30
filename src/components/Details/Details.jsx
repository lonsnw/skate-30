import { useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Details.css';

function Details(){

    const history = useHistory();
    const details = useSelector(store => store.details.details);

    const handleClick = () => {
        history.push('/');
  }

    console.log('genres:', genres);

    return(
        <div className="page">
            <Box className="deets" >
            {details.map(event => {
                return (
                <div key={event.id} className="deets" >
                <Card sx={{ maxWidth: 345 }}>
                    <Typography variant="h3">{event.rink}</Typography>
                </Card>
                <Typography>{event.notes}</Typography>
                </div>
            );
        })}
            </Box>
            <Button 
                onClick={() => {handleClick()}} 
                size="large"
                color="secondary" >
                Back to list
            </Button>

        </div>
    )
}

export default Details;