import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon

import 'bootstrap/dist/css/bootstrap.css';
//import AccountMenu from './Header';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AccountMenu from './AccountMenu';



import AddHomeIcon from '@mui/icons-material/AddHome';
import { PiStudentFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  // const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeDrawer = (anchor) => () => {
    setState({ ...state, [anchor]: false });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'left' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={closeDrawer(anchor)} style={{ position: 'absolute', right: '10px', top: '10px' }}>
        <CloseIcon />
      </Button>
       

      <List className='mt-5'>
        <ListItem disablePadding  >
          <ListItemButton href='/coordinator-home-page'>
            <ListItemIcon>
              {  <AddHomeIcon />  }
            </ListItemIcon>
            <ListItemText primary={"Home"} />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding   >
          <ListItemButton href = '/students'>
            <ListItemIcon>
              {<BsPersonFill />}
            </ListItemIcon>
            <ListItemText primary={"Students"} />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding   >
          <ListItemButton href = '/guides'>
            <ListItemIcon>
              { <BsPersonLinesFill /> }
            </ListItemIcon>
            <ListItemText primary={"Guides"} />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding   >
          <ListItemButton href = '/ethical-comitte'>
            <ListItemIcon>
              { <FaPeopleGroup/> }
            </ListItemIcon>
            <ListItemText primary={"Ethical Comitte"} />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding   >
          <ListItemButton href = 'evaluation-team'>
            <ListItemIcon>
              { <FaPeopleLine/> }
            </ListItemIcon>
            <ListItemText primary={"Evaluation Team"} />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href = '/settings'>
            <ListItemIcon>
              { <SettingsIcon/> }
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
            </ListItemButton>
        </ListItem>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      <div className='d-flex justify-content-between bg-primary p-2 align-items-center'>
        <div className='d-flex align-items-center'>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} style={{ color: "white" }}>{<MenuIcon />}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <div className='d-flex justify-content-center align-items-center'>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/58/99/initial-monogram-letter-pg-logo-design-template-vector-29635899.jpg" alt="logo" style={{ width: "30px", height: "30px", borderRadius: "8px" }} />
            <h3 style={{ color: "white",fontSize:"1em",marginLeft:"12px",marginTop:"8px" }} >PG Dissertation</h3> 
          </div>
        </div>
        <AccountMenu/> 
      </div>
    </div>
  );
}