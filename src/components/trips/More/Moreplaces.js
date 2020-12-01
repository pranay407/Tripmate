import React from 'react'
import Home from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Sun from '@material-ui/icons/WbSunny';
import Treking from '@material-ui/icons/FilterHdr';
import Club from '@material-ui/icons/Album';

import tropic1 from '../images/tropic1.jpg';
import tropic2 from '../images/tropic2.jpg';
import tropic3 from '../images/tropic3.jpg';
import tropic4 from '../images/tropic4.jpg';
import tropic5 from '../images/tropic5.jpg';
import tropic6 from '../images/tropic6.jpg';
import tropic7 from '../images/tropic7.jpg';
import tropic8 from '../images/tropic8.jpg';
import tropic9 from '../images/tropic9.jpg';
import tropic10 from '../images/tropic10.jpg';

import trek1 from '../images/trek1.jpg';
import trek2 from '../images/trek2.jpg';
import trek3 from '../images/trek3.jpg';
import trek4 from '../images/trek4.jpg';
import trek5 from '../images/trek5.jpg';
import trek6 from '../images/trek6.jpg';
import trek7 from '../images/trek7.jpg';
import trek8 from '../images/trek8.jpg';
import trek9 from '../images/trek9.jpg';
import trek10 from '../images/trek10.jpg';

import club1 from '../images/club1.jpg';
import club2 from '../images/club2.jpg';
import club3 from '../images/club3.jpg';
import club4 from '../images/club4.jpg';
import club5 from '../images/club5.jpg';
import club6 from '../images/club6.jpg';
import club7 from '../images/club7.jpg';
import club8 from '../images/club8.jpg';
import club9 from '../images/club9.jpg';
import club10 from '../images/club10.jpg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DirectionIcon from '@material-ui/icons/Directions';
import './Moreplaces.css'

function Moreplaces() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
          'Kalam'
      ]
    }
  });

    return (
  
   <div className="all-dest">

          <div className="home">
          <Link to="/">
          <Home  style={{fill:'green',fontSize:'200%'}}/>
          </Link>
          </div>
<br/>
<br/>
    <div className="center">
       <h5>Tropical <Sun style={{ fill: "rgb(243, 243, 18)", fontSize:'100%' }}  /> Vacations</h5>
    </div>


<br/>
<br/>

    <div className="center2">
      
    <div className="c1">
    
    <img src={tropic1} alt="Avatar" />
    
    <div className="name">
   
    <h2><b>The Seychelles</b></h2>
    
    <br/>
    <p>Located off the east coast of Africa, these islands are pure paradise.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/the-seychelles/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>           
    </div>
    </div>
   
    <div className="c1">
    <img src={tropic2} alt="Avatar" />
    <div className="name">
    <h2><b>The Maldives</b></h2>
    <br/>
    <p>Located in the middle of the Indian Ocean, it is a chain of 1,000 islands</p>

    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/the-maldives-travel-tips/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={tropic3} alt="Avatar" />
    <div className="name">
    <h2><b>Ko Lipe</b></h2>
    <br/>
    <p>Located in southern Thailand, that provides excellent snorkeling opportunities. </p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/thailand-travel-tips/ko-lipe/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
    <div className="c1">
    <img src={tropic4} alt="Avatar" />
    <div className="name">
    <h2><b>Bali & Gili Islands</b></h2>
    <br/>
    <p>This tourist mecca is voted one of the best islands in the world year after year.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/indonesia-travel-tips/bali/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={tropic5} alt="Avatar" />
    <div className="name">
    <h2><b>Fiji</b></h2>
    <br/>
    <p>When the name Fiji is heard, visions of beaches and tropical ocean dance in people’s head.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/fiji-travel-tips/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
  </div>

  <div className="center2"> 
    <div className="c1">
    <img src={tropic6} alt="Avatar" />
    <div className="name">
    <h2><b>Tahiti</b></h2>
    <br/>
    <p>Tahiti offers pure paradise and caters to a more affluent tourist crowd.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/french-polynesia-travel-tips/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={tropic7} alt="Avatar" />
    <div className="name">
    <h2><b>The Azores</b></h2>
    <br/>
    <p>Azores is great if you’re looking for something beyond the standard resort getaway.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/portugal/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={tropic8} alt="Avatar" />
    <div className="name">
    <h2><b>Big Island Hawaii</b></h2>
    <br/>
    <p>Hawaii’s biggest island has everything you could ever want to do and more.</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/united-states-travel-guide/hawaii/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={tropic9} alt="Avatar" />
    <div className="name">
    <h2><b>Barbados</b></h2>
    <br/>
    <p>Barbados is a vibrant island with a great nightlight & world-class surfing</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/caribbean-travel-tips/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>

    <div className="c1">
    <img src={tropic10} alt="Avatar" />
    <div className="name">
    <h2><b>San Blas Islands</b></h2>
    <br/>
    <p>The San Blas Islands are a popular spot for sailing and boat tours</p>
    <br/>
    <a href="https://www.nomadicmatt.com/travel-guides/panama-travel-tips/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>

    </div>
    <br/>
    <hr/>
    <br/>

    <div className="center">
       <h5>Treking <Treking style={{ fill: "brown", fontSize:'100%' }}  /> Places</h5>
    </div>


    <br/>
    <br/>

    <div className="center2">
      
    <div className="c1">
    
    <img src={trek1} alt="Avatar" />
    
    <div className="name">
   
    <h2><b>Chadar</b></h2>
    
    <br/>
    <p>An excellent trek along the frozen Zanskar river with beautiful winter terrain</p>
    <br/>
    <a href="https://www.trekthehimalayas.com/chadar-trek/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>           
    </div>
    </div>
   
    <div className="c1">
    <img src={trek2} alt="Avatar" />
    <div className="name">
    <h2><b>Gangotri Gomukh</b></h2>
    <br/>
    <p>This trek takes you to the Gangotri glacier at Gomukh, the source of the Ganges</p>

    <br/>
    <a href="https://www.trekthehimalayas.com/gaumukh-tapovan-trek/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={trek3} alt="Avatar" />
    <div className="name">
    <h2><b>Ladakh</b></h2>
    <br/>
    <p> Housing several old Buddhist monasteries, repository of ancient Tibetan culture</p>
    <br/>
    <a href="https://www.treebo.com/blog/trekking-in-ladakh/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
    <div className="c1">
    <img src={trek4} alt="Avatar" />
    <div className="name">
    <h2><b>Kuari Tapovan</b></h2>
    <br/>
    <p> The highlight of the trek is the Kuari pass at an altitude of 4264 m.</p>
    <br/>
    <a href="https://www.trekkingingarhwal.com/kauri-tapovan-trekking.html">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={trek5} alt="Avatar" />
    <div className="name">
    <h2><b>Nanda Devi</b></h2>
    <br/>
    <p>Rising to an altitude of 7816 m, Nanda Devi is the highest peak in the Garhwal region of India.</p>
    <br/>
    <a href="http://www.nandadevitrek.in/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
  </div>

  <div className="center2"> 
    <div className="c1">
    <img src={trek6} alt="Avatar" />
    <div className="name">
    <h2><b>Goecha La trek</b></h2>
    <br/>
    <p>A trek in the heart of the beautiful Sikkim region, the third highest mountain peak.</p>
    <br/>
    <a href="https://www.trekthehimalayas.com/goechala-trek/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={trek7} alt="Avatar" />
    <div className="name">
    <h2><b>Valley of Flowers</b></h2>
    <br/>
    <p>It is a huge valley blooming with more types of flowers than one can possibly count.</p>
    <br/>
    <a href="https://www.euttaranchal.com/tourism/valley-of-flowers.php">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={trek8} alt="Avatar" />
    <div className="name">
    <h2><b>Roopkund trek</b></h2>
    <br/>
    <p>Roopkund is a lake at an altitude of 5029 m, famous for the human skeletal remains</p>
    <br/>
    <a href="https://www.trekthehimalayas.com/roopkund-trek/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={trek9} alt="Avatar" />
    <div className="name">
    <h2><b>Dodital trek</b></h2>
    <br/>
    <p>Among snow-clad mountains in the Uttarakhand region lies a small freshwater lake</p>
    <br/>
    <a href="https://www.treksandtrails.org/tours/dodital-trek">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>

    <div className="c1">
    <img src={trek10} alt="Avatar" />
    <div className="name">
    <h2><b>Stok Kangri</b></h2>
    <br/>
    <p>The majestic view of the Himalayas makes the whole trek a journey to remember.</p>
    <br/>
    <a href="https://www.trekthehimalayas.com/stok-kangri-trek/">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>
     </div>

     <br/>
     <hr/>
     <br/>


              {/* ..........................Club......................................... */}

     <div className="center">
       <h5>Club <Club style={{ fill: "#FFD700", fontSize:'100%' }}  /> Spots</h5>
    </div>

    <br/>
    <br/>

    <div className="center2">
      
    <div className="c1">
    
    <img src={club1} alt="Avatar" />
    
    <div className="name">
   
    <h2><b>Space Plus Nanjing</b></h2>
    
    <br/>
    <p>Space Plus in China has become a byword for world-class clubbing.</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-space-plus-nanjing">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>           
    </div>
    </div>
   
    <div className="c1">
    <img src={club2} alt="Avatar" />
    <div className="name">
    <h2><b>Papaya</b></h2>
    <br/>
    <p>A space that would put it on top of world map for festival-goers & adventure seekers.</p>

    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-papaya">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={club3} alt="Avatar" />
    <div className="name">
    <h2><b>White Dubai</b></h2>
    <br/>
    <p>Located on the rooftop of Meydan Hotel & offers best views of Dubai’s skyline.</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-white-dubai">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
    <div className="c1">
    <img src={club4} alt="Avatar" />
    <div className="name">
    <h2><b>Beachclub</b></h2>
    <br/>
    <p>The venue holds the title of the largest open-air club in North America.</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-beachclub">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={club5} alt="Avatar" />
    <div className="name">
    <h2><b>Culture Club Revelin</b></h2>
    <br/>
    <p>It is in the old town of Dubrovnik is an essential place to visit when you’re in Croatia</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-culture-club-revelin">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>
   
  </div>

  <div className="center2"> 
    <div className="c1">
    <img src={club6} alt="Avatar" />
    <div className="name">
    <h2><b>El Fortin</b></h2>
    <br/>
    <p>Brazilian beach club where you can dance until dawn with sand between your toes</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-el-fortin">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={club7} alt="Avatar" />
    <div className="name">
    <h2><b>Hakkasan</b></h2>
    <br/>
    <p>Having essentially become a retirement home for big-name heritage pop acts in noughties</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-hakassan">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider> 
    </a> 
    </div>
    </div>

    <div className="c1">
    <img src={club8} alt="Avatar" />
    <div className="name">
    <h2><b>Avalon Hollywood</b></h2>
    <br/>
    <p>One of Los Angeles’ longest-running and most-consistent dance music venues.</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-avalon-hollywood">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>
    </div>
    </div>

    <div className="c1">
    <img src={club9} alt="Avatar" />
    <div className="name">
    <h2><b>Ai Nightclub</b></h2>
    <br/>
    <p> Ai nightclub has picked up where its predecessors Elektro and Spark left off.</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-ai-nightclub">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>

    <div className="c1">
    <img src={club10} alt="Avatar" />
    <div className="name">
    <h2><b>La Feria</b></h2>
    <br/>
    <p>As one of the smallest clubs to ever grace our Top 100 Clubs list</p>
    <br/>
    <a href="https://djmag.com/top-100-clubs/poll-clubs-2020-la-feria">
    <ThemeProvider theme={theme}>
                 <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionIcon />}
                 >
                     Guide
                 </Button>
    </ThemeProvider>  
    </a>  
    </div>
    </div>
     </div>


    </div>
    )
}

export default Moreplaces
