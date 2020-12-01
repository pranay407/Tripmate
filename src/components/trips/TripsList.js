import React from 'react';
import Home from '@material-ui/icons/Home'
import { Link } from 'react-router-dom';
import { Trip } from './Trip';
import travel2 from '../trips/images/travel2.gif'

export const TripsList = ({match, days}) => { 
    const filter = match.params.filter;
    const trips = filter ? days.filter( trip => trip.type === filter) : days;
    return (

        <div className="all-list">

          <div className="home">
          <Link to="/">
          <Home  style={{fill:'green',fontSize:'200%'}}/>
          </Link>
          </div>

        <div className="trips-list">
            <p>{filter ? filter : 'All'} Trips</p> 
            <br/>           
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <br/>
                <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trip
                                key={i}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
            {/* <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/list/Club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/list/Tropic">
                    Tropics
				</Link>
            </div>             */}
        </div>

      <div className="list-gif">
        <img src={travel2} alt="travel" style={{width:'110%'}}/>
      </div>

        </div>
    )
}