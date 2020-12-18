import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, isRed, active, cases, total, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
            {/* //4:07 */}
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                <Typography className="infoBox__toal" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>

        </Card>
    )
}

export default InfoBox;