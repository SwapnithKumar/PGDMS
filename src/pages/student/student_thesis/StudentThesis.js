import React, { useEffect, useState } from 'react'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./StudentThesis.css"
import { TextField,FormControl, InputLabel, MenuItem, Select, Button, Typography, Grid, Box, Paper } from '@mui/material';
import { StudentThesis2 } from './StudentThesis2';
import Sidebar from '../studentSidebarAndHeader/Sidebar';
import { auth } from '../../../firebase';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

const db=getFirestore();

const wrap={
  bgcolor: 'lightblue'
}
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'backgroud.paper',
};

const style2={
  width: '100%',
  maxWidth: 360,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'black',
  borderRadius : '10px',
  marginTop : '4px',
  textAlign : 'center'
}


const StudentThesis = () => {
  const [topic,setTopic]=useState("");
  const [mainOptions,setMainOptions] = useState([]);
  const [mainOptionsData,setMainOptionsData]=useState([]);
  const isGuideAlocated = false;
  const [mainSelections, setMainSelections] = useState(Array(mainOptions.length).fill(''));
  const [storedPreferences, setStoredPreferences] = useState([]);
  const [struggling,setStruggling]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db,'universities','uni1','guide'));
        let mainOptions3=[];
        let mainOptions2=[];
        snapshot.forEach((doc)=>{
        let t=(doc.data());
        mainOptions2.push(t.firstName);
        t["id"]=doc.id;
        mainOptions3.push(t);
       })
       setMainOptions(mainOptions2);
       setMainOptionsData(mainOptions3);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  const changeStruggling=()=>{
    setStruggling((prevState)=>!prevState);
    console.log(struggling);
  }
  const handleMainSelect = (index, value) => {
    const updatedMainSelections = [...mainSelections];
    updatedMainSelections[index] = value;
    setMainSelections(updatedMainSelections);
  };
  const handleStorePreferences = () => {
    let pref=[];
    const preferences = mainOptions.map((mainOption, mainIndex) => ({
      domain: mainSelections[mainIndex],
    }));
    //console.log(preferences);
    for(let item of preferences){
      pref.push(item["domain"]);
    }
    //console.log(pref);
    setStoredPreferences(pref);
  };
  const handleSubmitPreferences=async ()=>{
    const ref=doc(db,"universities",'uni1','preferences','student');
    let docu=await getDoc(ref);
    docu=docu.data();
    const uid=auth.currentUser.uid;
    let obj={};
    obj[uid]=storedPreferences;
    await setDoc(ref,{
      ...docu,...obj
    }).then(()=>{console.log("stored")})
  }
  return (
    <div>
      <Sidebar/>
    <div className='bbg'>
      <div className='bg'>
        <div className='topic-input-container'>
          <Card sx={{ }}>
            <CardContent>
            <h3 className="heading" >topic input </h3>
            <TextField required id="outlined-basic" label="Enter Your Topic" variant="outlined" onChange={(e)=>{setTopic(e.target.value)}}/>
            <label>struggling to find topic ...</label>
            <button onClick={changeStruggling}>ask guide</button>
            {struggling ? 
            <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem sx={style2}>
                <ListItemText  primary="Inbox" />
              </ListItem>
              <ListItem sx={style2}  >
                <label>ha</label><button>chat</button>
              </ListItem>
              <ListItem sx={style2} >
                <ListItemText  primary="Trash" />
              </ListItem>
              
              <ListItem sx={style2}>
                <ListItemText  primary="Spam" />
              </ListItem>
            </List>
            </div> :<br/>}
            </CardContent>
          </Card>
        </div>
        <div className='generated-topics-container'>
        <Card sx={{}}>
            <CardContent>
            <h3 className="heading" >aigenerated topics or department topics</h3>
            <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem sx={style2}>
                <ListItemText  primary="Inbox" />
              </ListItem>
              <ListItem sx={style2}  >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem sx={style2} >
                <ListItemText  primary="Trash" />
              </ListItem>
              
              <ListItem sx={style2}>
                <ListItemText  primary="Spam" />
              </ListItem>
            </List>
            </div>
            </CardContent>
          </Card>
        </div>
        <div className='selected-topics-container'>
          <Card sx={{  }}>
            <CardContent>
            <h3 className="heading" >selected topics</h3>
            <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem sx={style2}>
                <ListItemText  primary="Inbox" />
              </ListItem>
              <ListItem sx={style2}  >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem sx={style2} >
                <ListItemText  primary="Trash" />
              </ListItem>
              
              <ListItem sx={style2}>
                <ListItemText  primary="Spam" />
              </ListItem>
            </List>
            </div>            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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
                        <Button variant="contained" color="primary" onClick={handleSubmitPreferences}>
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
    </div>
  )
}

export default StudentThesis
