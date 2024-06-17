import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography, Grid, Box, Paper } from '@mui/material';
import './StudentThesis2.css'
import Sidebar from '../studentSidebarAndHeader/Sidebar'

export const StudentThesis2 = () => {
  const mainOptions = ['Guide 1', 'Guide 2', 'Guide 3','Guide 4'];
  const isGuideAlocated = false;

  const [mainSelections, setMainSelections] = useState(Array(mainOptions.length).fill(''));
  const [storedPreferences, setStoredPreferences] = useState([]);

  const handleMainSelect = (index, value) => {
    const updatedMainSelections = [...mainSelections];
    updatedMainSelections[index] = value;
    setMainSelections(updatedMainSelections);
  };

  const handleStorePreferences = () => {
    const preferences = mainOptions.map((mainOption, mainIndex) => ({
      domain: mainSelections[mainIndex],
    }));
    console.log(preferences);
    setStoredPreferences(preferences);
  };

  return (
     <div>
        
        {!isGuideAlocated && <div className='guides-selection-bg-container'>
            <Box>
                <Paper elevation={8} style={{ width: '50%', padding: '40px', overflowY: 'auto' , marginLeft :"100px"}}>
                    <Grid container spacing={2}>
                    <h1>Select your Guide</h1>
                    {mainOptions.map((mainOption, mainIndex) => (
                        <Grid item xs={12} key={mainIndex}>
                            
                        <FormControl fullWidth variant="outlined" style={{ marginBottom: '10px' }}>
                            <InputLabel style={{ fontSize: '14px' }}>{`Guide Preference ${mainIndex + 1}`}</InputLabel>
                            <Select
                            value={mainSelections[mainIndex]}
                            onChange={(e) => handleMainSelect(mainIndex, e.target.value)}
                            label={`Guide Preference ${mainIndex + 1}`}
                            MenuProps={{
                                PaperProps: {
                                style: {
                                    maxHeight: 150,
                                },
                                },
                            }}
                            >
                            <MenuItem value="" style={{ height: '30px', fontSize: '12px' }}>
                                <em>Select Guide</em>
                            </MenuItem>
                            {mainOptions.map((option) => (
                                <MenuItem
                                key={option}
                                value={option}
                                disabled={mainSelections.includes(option) && mainSelections.indexOf(option) !== mainIndex}
                                style={{ height: '30px', fontSize: '12px' }}
                                >
                                {option}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </Grid>
                    ))}

                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleStorePreferences}>
                        Save Preferences
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                        Saved Preferences
                        </Typography>
                        <ul>
                        {storedPreferences.map((preference, index) => (
                            <li key={index}>
                            <strong>{`Guide ${index + 1}: `}</strong> {preference.domain}
                            </li>
                        ))}
                        </ul>
                    </Grid>

                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleStorePreferences}>
                        Submit Preferences
                        </Button>
                    </Grid>

                    </Grid>
                </Paper>
            </Box>
        </div>}
        {
            isGuideAlocated && 
            <div>
                <h1>U have been Allocated you can start your thesis.</h1>
            </div>
        }
     </div>
  );
};


