import Box from '@mui/material/Box';
export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <main className='App-body'>
                    <Box sx={{minHeight: '100vh', padding: 0, margin: 0, width: '100%'}}>{children}</Box>
                </main>
            )}
        </div>
    );
}
