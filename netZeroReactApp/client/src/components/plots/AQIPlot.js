import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

function AQIPlot({ locationData }) {
    console.log(locationData);

    return (
        <LineChart width={400} height={400} data={locationData}>
            <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="timestamp">
                <Label value="Timestamp" offset={0} position="insideBottom" fill="#c4c1c1" />
            </XAxis>
            <YAxis >
                <Label value="AQI" offset={10} angle={-90} position="insideLeft" fill="#c4c1c1" />
            </YAxis>
            <Tooltip />
        </LineChart>
    );
}

export default AQIPlot;