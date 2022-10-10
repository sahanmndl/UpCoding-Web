import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const PlatformCard = ({ image, caption, darkmode }) => {
    return (
        <Card sx={{ width: 300, boxShadow: darkmode ? '0 0 4px #757575' : '' }}>
            <CardMedia
                component="img"
                height="150"
                image={image}
                sx={{objectFit: 'contain'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {caption}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Check user statistics on {caption}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">LET'S GO!</Button>
            </CardActions>
        </Card>
    )
}

export default PlatformCard