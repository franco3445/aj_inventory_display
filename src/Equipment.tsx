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
import {equipmentListArray} from "../src/EquipmentList.tsx";
// Todo: indivdual clicking
// Todo: individual contact buttons

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
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

export default function Equipment() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Grid container justifyContent="center" spacing={4}>
                {equipmentListArray.map(pieceOfEquipment => {
                    return (
                        <Grid item key={pieceOfEquipment.id}>
                            <Card sx={{ maxWidth: 500 }}>
                            <CardHeader
                                title={`Model: ${pieceOfEquipment.title}`}
                                subheader={`Date Uploaded: ${pieceOfEquipment.dateUploaded}`}
                            />
                            <CardMedia
                                component="img"
                                height="250"
                                image={pieceOfEquipment.image}
                                alt=""
                            />
                            <CardContent>
                                <Typography variant="body2">
                                    <b>Location: </b>{pieceOfEquipment.location}
                                    <br/>
                                    <b>Serial Number: </b>{pieceOfEquipment.serialNumber}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="body2">
                                    {pieceOfEquipment.shortAboutMe}
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
                                        {pieceOfEquipment.longAboutMe}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}