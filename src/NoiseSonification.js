import { Slider, Box, Grid, Button } from '@mui/material';
import * as Tone from 'tone';
import Portal from './Portal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import shoe from './assets/shoe.png';
import headphones from './assets/headphones.png';

const gainNode = new Tone.Gain(0).toDestination();
const noise = new Tone.Noise('pink');
const music = new Tone.Player(process.env.PUBLIC_URL + '/stayinAlive.mp3').toDestination();

export default function DirectSonification() {

    const handlePlay = () => {
        Tone.loaded().then(() => {
            music.start();
            noise.connect(gainNode).start();
        });
    };
    const handleStop = () => {
        music.stop();
        noise.stop();
    };

    const setVolume = (gain) => {
        gainNode.gain.value = gain/50;
    }

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
                <Grid xs={2} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2}>
                    <img src={shoe} height={150} alt='eeg' />
                </Grid>
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={2} sx={{p: 2, boxShadow: 5}}>
                    <Box>
                        <Slider
                            orientation='vertical'
                            max={100}
                            defaultValue={0}
                            step={1}
                            sx={{ height: '200px' }}
                            valueLabelDisplay='auto'
                            onChange={(event, value) => {
                                setVolume(value);
                            }}
                        />
                        <Box>
                            <Button variant='text' onClick={handlePlay}>
                                Play
                            </Button>
                            <Button variant='text' onClick={handleStop}>
                                Stop
                            </Button>
                        </Box>
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
