import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography, Grid, Box, Paper } from '@mui/material';

export const PreferenceForm = () => {
  const mainOptions = ['Student 1', 'Student 2', 'Student 3','Student 4'];

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
    <Box
       
    >
      <Paper elevation={8} style={{ width: '80%', padding: '20px', overflowY: 'auto' }}>
        <Grid container spacing={2}>
          {mainOptions.map((mainOption, mainIndex) => (
            <Grid item xs={12} key={mainIndex}>
              <FormControl fullWidth variant="outlined" style={{ marginBottom: '10px' }}>
                <InputLabel style={{ fontSize: '14px' }}>{`Student Preference ${mainIndex + 1}`}</InputLabel>
                <Select
                  value={mainSelections[mainIndex]}
                  onChange={(e) => handleMainSelect(mainIndex, e.target.value)}
                  label={`Student Preference ${mainIndex + 1}`}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 150,
                      },
                    },
                  }}
                >
                  <MenuItem value="" style={{ height: '30px', fontSize: '12px' }}>
                    <em>Select Student</em>
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
                  <strong>{`Student ${index + 1}: `}</strong> {preference.domain}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
