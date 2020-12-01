import React from 'react';
import { MdTerrain} from 'react-icons/md';
import {MdWbSunny} from 'react-icons/md';
import {FaBeer} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import bg from '../trips/images/bg1.jpg';
import trek1 from '../trips/images/trek.jpg';
import bgclub from '../trips/images/club.jpg';
import logo from '../trips/images/logo.jpg';
import Button from '@material-ui/core/Button';
import TravelIcon from '@material-ui/icons/CardTravel';
import CarIcon from '@material-ui/icons/DirectionsCar';
import LocationIcon from '@material-ui/icons/AddLocation'
import Home from '@material-ui/icons/Home'
import { withStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const StyledButton = withStyles({
    root: {
      background: 'green',
    //   borderRadius: 3,
    //   border: 0,
    //   color: 'white',
    //   height: 48,
    //   padding: '0 30px',
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
    
  })(Button);


const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Kalam'
    ]
  }
});


export const TripsCount = ({total, tropic, trek, club}) => (
    

    <div className="main-div">
        <div className="logo">
        <img src={logo} alt="logo"/>
        </div>

        <div className="trip-count">
        <div className="total"><h1>{total}</h1>trips</div>
        </div>

        <div className="trip-types">

        <div className="card">
                 <Link to="/list/Tropic">
                 <img src={bg} alt="Avatar" className="tropicimg"/>
                 </Link>
                 <div className="types">
                 <h3>{tropic}</h3>
                 <MdWbSunny />
                 </div>
        </div>
             
        <div className="card">
                 <Link to="/list/Trek">
                 <img src={trek1} alt="Avatar" className="tropicimg"/>
                 </Link>
                 <div className="types">
                 <h3>{trek}</h3>
                 < MdTerrain/>
                 </div>
        </div>

        <div className="card">
                 <Link to="/list/Club">
                 <img src={bgclub} alt="Avatar" className="tropicimg"/>
                 </Link>
                 <div className="types">
                 <h3>{club}</h3>
                 < FaBeer/>
                 </div>
        </div>
        </div>
        <br/>
        <br/>
        <ThemeProvider theme={theme}>
        <div className="btns">

            <div className="plan-btn">
                <Link to="/add">
                 <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<TravelIcon />}
                 >
                      Plan a trip
                 </Button>
                </Link>
            </div>

            <div className="alltrip-btn">
                <Link to="/list">
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CarIcon />}
                 >
                      My all trips
                 </Button>
                </Link>
            </div>

            <div className="alltrip-btn">
                <Link to="/Moreplaces">
                 <StyledButton
                  variant="contained"
                  color="primary"
                  startIcon={<LocationIcon />}
                 >
                      EXPLORE MORE
                 </StyledButton>
                </Link>
            </div>
        </div>
        </ThemeProvider>
        </div>
       
    
)

