import { Slider, Box, Grid, Button} from '@mui/material';
import Portal from './Portal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as Tone from 'tone';
import stress from './assets/stress.png';
import headphones from './assets/headphones.png';

const vol1 = new Tone.Gain(0).toDestination();
const vol2 = new Tone.Gain(0).toDestination();
const vol3 = new Tone.Gain(0).toDestination();
const vol4 = new Tone.Gain(0).toDestination();
const layer1 = new Tone.Player(process.env.PUBLIC_URL + '/layer1.mp3');
layer1.loop = true;
const layer2 = new Tone.Player(process.env.PUBLIC_URL + '/layer2.mp3');
layer2.loop = true;
const layer3 = new Tone.Player(process.env.PUBLIC_URL + '/layer3.mp3');
layer3.loop = true;
const layer4 = new Tone.Player(process.env.PUBLIC_URL + '/layer4.mp3');
layer4.loop = true;

export default function MusicSonification() {

    const handlePlay = () => {
        Tone.loaded().then(() => {
            layer1.connect(vol1).start();
            layer2.connect(vol2).start();
            layer3.connect(vol3).start();
            layer4.connect(vol4).start();
            handleLayers(0);
        });
    };
    const handleStop = () => {
        layer1.stop();
        layer2.stop();
        layer3.stop();
        layer4.stop();
    };

    const handleLayers = (val) => {
        if (val >= 0) {
            vol1.gain.value = 1;
            vol2.gain.value = 0;
            vol3.gain.value = 0;
            vol4.gain.value = 0;
        }
        if (val > 1) {
            vol1.gain.value = 0;
            vol2.gain.value = 1;
            vol3.gain.value = 0;
            vol4.gain.value = 0;
        }
        if (val > 2) {
            vol1.gain.value = 0;
            vol2.gain.value = 0;
            vol3.gain.value = 1;
            vol4.gain.value = 0;
        }
        if (val > 3) {
            vol1.gain.value = 0;
            vol2.gain.value = 0;
            vol3.gain.value = 0;
            vol4.gain.value = 1;
        }
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
                    <img src={stress} height={150} alt='eeg' />
                </Grid>
                <Grid xs={1} sx={'text-align: center;'}>
                    <ArrowForwardIosIcon sx='font-size: 50px;' />
                </Grid>
                <Grid xs={3} sx={{p: 2, boxShadow: 5}}>
                    <Box>
                        <Slider
                            orientation='vertical'
                            max={4}
                            step={0.1}
                            defaultValue={0}
                            sx={{height: '100px'}}
                            onChange={(event, value) => {
                                handleLayers(value);
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
