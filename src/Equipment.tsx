import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';

import {equipmentListArray} from "../src/EquipmentList.tsx";
import EquipmentCard from "./EquipmentCard.tsx";

export default function Equipment() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            <Grid container justifyContent="center" spacing={4}>
                {equipmentListArray.map(pieceOfEquipment => {
                    return (
                        <EquipmentCard
                            key={pieceOfEquipment.id}
                            id={pieceOfEquipment.id}
                            title={pieceOfEquipment.title}
                            dateUploaded={pieceOfEquipment.dateUploaded}
                            image={pieceOfEquipment.image}
                            location={pieceOfEquipment.location}
                            serialNumber={pieceOfEquipment.serialNumber}
                            shortAboutMe={pieceOfEquipment.shortAboutMe}
                            longAboutMe={pieceOfEquipment.longAboutMe}
                        >
                        </EquipmentCard>
                    )
                })}
            </Grid>
        </div>
    );
}