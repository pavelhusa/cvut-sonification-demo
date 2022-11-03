import { useState } from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import './App.css';
import TabPanel from './TabPanel';
import DirectSonification from './DirectSonification';
import DiscreteSonification from './DiscreteSonification';
import NoiseSonification from './NoiseSonification';
import MusicSonification from './MusicSonification';
import Credits from './Credits';

function App() {
    const [tab, setTab] = useState(0);
    const tabChange = (event, newTab) => {
      setTab(newTab);
    };
    return (
        <div className='App'>
            <Tabs value={tab} onChange={tabChange}>
              <Tab label="Direct sonification"/>
              <Tab label="Discrete sonification"/>
              <Tab label="Noise music feedback"/>
              <Tab label="Layered music feedback"/>
              <Tab label="Credits"/>
            </Tabs>
            <TabPanel value={tab} index={0}>
              <h1>Direct EEG sonification feedback</h1>
              <DirectSonification />
              {/* <Box sx={{m: 10}}>{texts.directSonification.desc}</Box> */}
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <h1>Discrete EEG sonification feedback - Scale It</h1>
              <DiscreteSonification />
              {/* <Box sx={{p: 10}}>{texts.directSonification.desc}</Box> */}
              <Box sx={{p: 3, fontSize: '.9rem'}}>[1] C. Kaplan and P. Husa, ‘scale_it 0.2’, 2020, doi: 10.17605/OSF.IO/D6MK2.</Box>
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <h1>Feedback using prerecorded music and noise</h1>
              <NoiseSonification />
              <Box sx={{fontSize: '.9rem'}}>[1] P. Van den Berghe et al., ‘Music-based biofeedback to reduce tibial shock in over-ground running: a proof-of-concept study’, Sci Rep, vol. 11, no. 1, p. 4091, Dec. 2021, doi: 10.1038/s41598-021-83538-w.
</Box>
            </TabPanel>
            <TabPanel value={tab} index={3}>
              <h1>Feedback using layered prerecorded music</h1>
              <MusicSonification />
            </TabPanel>
            <TabPanel value={tab} index={4}>
              <h1>Q & A</h1>
              <Credits />
            </TabPanel>
        </div>
    );
}

export default App;
