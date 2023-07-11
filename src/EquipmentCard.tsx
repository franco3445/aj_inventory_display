import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Todo: indivdual clicking
// Todo: individual contact buttons

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

type EquipmentCardType = {
    id: string;
    title: string;
    dateUploaded: string;
    image: string;
    location: string;
    serialNumber: string;
    shortAboutMe: string;
    longAboutMe: string;

}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function EquipmentCard(props: EquipmentCardType) {
    const {
        id,
        title,
        dateUploaded,
        image,
        location,
        serialNumber,
        shortAboutMe,
        longAboutMe
    } = props
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item key={id}>
            <Card sx={{ maxWidth: 500 }} style={{height: "100%"}}>
                <CardHeader
                    title={`Model: ${title}`}
                    subheader={`Date Uploaded: ${dateUploaded}`}
                />
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt=""
                />
                <CardContent>
                    <Typography variant="body2">
                        <b>Location: </b>{location}
                        <br/>
                        <b>Serial Number: </b>{serialNumber}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        {shortAboutMe}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {longAboutMe}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}