import { useState } from 'react';
import { Slider, Box, Grid, Select, MenuItem } from '@mui/material';
import Portal from './Portal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as Tone from 'tone';
import eeg from './assets/brainWave.png';
import headphones from './assets/headphones.png';

const synth = new Tone.Synth().toDestination();
Tone.context.lookAhead = 0;

const scales = [
    ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4'],
    ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5'],
    ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5', 'D5'],
    ['C4', 'D4', 'Eb4', 'E4', 'G4', 'A4', 'C5', 'D5', 'Eb5']
]

function playTone(scale, tone) {
    synth.triggerAttackRelease(Tone.Frequency(scales[scale][tone]), '0.1');
}

export default function DiscreteSonification(props) {
    const [tone, setTone] = useState(0);
    const [scale, setScale] = useState(0);

    const handleScale = (event, scale) => {
        setScale(scale.props.value);
    };

    return (
        <Grid container spacing={0} textAlign={'center'}>
            <Grid xs={1} justifyContent={'space-between'} alignItems={'center'}>
                <Portal type='in' />
            </Grid>
            <Grid
                container
                xs={10}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2}>
                    <img src={eeg} height={150} alt='eeg' />
                </Grid>
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={3} sx={{p: 2, boxShadow: 5}}>
                    <Box>
                        <Slider
                            orientation='vertical'
                            defaultValue={tone}
                            max={7}
                            marks={true}
                            step={1}
                            sx={{height: '100px'}}
                            valueLabelDisplay='auto'
                            onChange={(event, value) => {
                                setTone(value);
                                playTone(scale, value);
                            }}
                        />
                        <Box sx={{p:5}}>
                        <Select onChange={handleScale} defaultValue={0} color={'primary'}>
                            <MenuItem value={0} selected={true}>Chromatic</MenuItem>
                            <MenuItem value={1}>Major</MenuItem>
                            <MenuItem value={2}>Minor</MenuItem>
                            <MenuItem value={3}>Pentatonic</MenuItem>
                        </Select>
                        </Box>
                        <p>mV =&gt; notes</p>
                    </Box>
                </Grid>
                <Grid xs={1}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2}>
                    <img src={headphones} height={150} alt='eeg' />
                </Grid>
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
            </Grid>
            <Grid xs={1}>
                <Portal type='out' />
            </Grid>
        </Grid>
    );
}
