import React from 'react';
import Home from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import travel1 from '../trips/images/travel1.gif'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Kalam'
    ]
  }
});

export const AddTrip = ({newTrip}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            place : place.value,
            type : type.value,
        });
        date.value = place.value = type.value = '';
    }

    return (
     
        <div className="add-trip">

         <div className="home">
          <Link to="/">
          <Home  style={{fill:'green',fontSize:'200%'}}/>
          </Link>
          </div>

          <div className="add-gif">
           <img src={travel1} alt="travel" style={{width:'60%'}}/>
          </div>

        <div className="form-container">

            
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h4>Add a trip</h4>
                    <br />
                 
                   
                </label>
                <label>
                    Date: <br/>
                    <input 
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label>
                    Place: <br />
                    <input
                        id="date"
                        type="text"
                        required
                        ref={(input) => place = input} 
                    />
                </label>
                <label>
                    Type: <br />
                    <select ref={(input) => type = input} >
                        <option value="Trek">Trek</option>
                        <option value="Tropic">Tropic</option>
                        <option value="Club">Club</option>
                    </select>
                </label>
                <br/>
                {/* <input type="submit" value="SUBMIT" /> */}
                <ThemeProvider theme={theme}>
                <Button
                 variant="contained"
                 color="secondary"
                type="submit"
                >
                    Submit
                </Button>
                </ThemeProvider>
            </form>
        </div>
        </div>
    );
}