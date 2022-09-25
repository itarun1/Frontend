import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyIcon from "@mui/icons-material/Key";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import BarChartIcon from '@mui/icons-material/BarChart';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import EvStationIcon from '@mui/icons-material/EvStation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StadiumIcon from '@mui/icons-material/Stadium';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { userLogin } from "../Redux/Login/action";
import HistoryIcon from '@mui/icons-material/History';
import CellTowerIcon from '@mui/icons-material/CellTower';

export const Sidebar = () => {
  const ListItemStyle = { fontSize: '0.7 rem' , color:'white' }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listopen, setlistopen] = React.useState(true);
  const handleClick = () => {
    if(listopen)
    {
      setlistopen(false)
      return
    }
    setlistopen(true)
  };
  const logout=() => {
    localStorage.removeItem("user")
      dispatch(userLogin(null));
      navigate("/");
  }
  
  return (
    <div>
    <h3 className="title" style={{"color": "white"}}>Grid Manager 2.0</h3>
    <hr />
    <div className="profilediv">
      <img
        src="https://via.placeholder.com/50"
        alt="myPhoto"
        className="profileim"
      />
      <span>
        <span style={{"color": "white"}}>Hey, Tarun</span>
        <h5  style={{"color": "white"}}>
          User Id:128787
        </h5>
      </span>
    </div>
    <div className="sidebar_full">
      <List>
        <ListItemButton>
          <ListItemIcon>
            <GridViewIcon className="icons" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={ListItemStyle} primary="Dashboard" />
        </ListItemButton>
        <div className={`${listopen ? "listview" : ""}`}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <KeyIcon className="icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="E3 Apps" />
            {listopen ? <ExpandLess style={{"color": "white"}}/> : <ExpandMore style={{"color": "white"}} />}
          </ListItemButton>
          <Collapse in={listopen}>
            <List component="div" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AcUnitIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Peak Shaving & Alert" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HeatPumpIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Ventilation" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LightbulbCircleIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Cooling" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StadiumIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Heat Pump" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AccessTimeIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Out of Hours" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <EvStationIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Ev Charging" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ElectricBoltIcon className="icons" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={ListItemStyle} primary="Load Shifting" />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
        <div>
          <ListItemButton>
            <ListItemIcon>
              <CellTowerIcon className="icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="Demand Response" />
            {<ExpandLess style={{"color": "white"}}/> }
          </ListItemButton>
        </div>
        <div>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon className="icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="Insights" />
            {<ExpandLess style={{"color": "white"}}/>}
          </ListItemButton>
        </div>
        <div>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon className="icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="Version History" />
            { <ExpandLess style={{"color": "white"}}/> }
          </ListItemButton>
        </div>
        <div className="logout">
          <ListItemButton onClick={() => logout()} >
            <ListItemIcon>
              <PowerSettingsNewIcon className="icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="Logout" />
          </ListItemButton>
        </div>
      </List>
    </div>
  </div>
  );
};


