import { useState } from 'react';
import { Slider, Box, Grid } from '@mui/material';
import * as Tone from 'tone';
import Portal from './Portal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import eeg from './assets/brainWave.png';
import headphones from './assets/headphones.png'

const synth = new Tone.Synth().toDestination();
function playTone(tone) {
    synth.triggerAttack(Tone.Frequency(tone).toFrequency(), '8n', 0.5);
}

export default function DirectSonification() {
    const [tone, setTone] = useState(1000);

    return (
        <Grid container spacing={0} textAlign={'center'}>
            <Grid xs={1} justifyContent={'space-between'} alignItems={'center'}>
                <Portal type='in' />
            </Grid>
            <Grid container xs={10} justifyContent={'center'} alignItems={'center'}>
                <Grid xs={2} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2}>
                    <img src={eeg} height={150} alt='eeg' />
                </Grid>
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2} sx={{p: 2, boxShadow: 5}}>
                    <Box>
                        <Slider
                            orientation='vertical'
                            defaultValue={tone}
                            max={5000}
                            step={1}
                            sx={{ height: '200px' }}
                            valueLabelDisplay='auto'
                            onChange={(event, value) => {
                                setTone(value);
                                playTone(value);
                            }}
                        />
                        <Box>mV =&gt; Hz</Box>
                        
                    </Box>
                </Grid>
                <Grid xs={1}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2}>
                    <img src={headphones} height={150} alt='eeg' />
                </Grid>
                <Grid xs={2} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
            </Grid>
            <Grid xs={1}>
                <Portal type='out' />
            </Grid>
        </Grid>
    );
}
