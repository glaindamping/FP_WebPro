import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Provinsi } from './pages'
import Carousel from 'react-bootstrap/Carousel';


function App() {
    return (
        <Router>
            <div className='background'>
              <div className='home'>
                <nav className='nav'>  
                <h1 className='text'> Covid-19 Tracker</h1>
                    <ul>
                        <li>
                        <Link to="/">
                        Home
                        </Link>
                        </li>
                        <li>
                        <Link to="/Global">
                        Global
                        </Link>
                        </li>
                        <li>
                        <Link to="/Indo">
                        Indonesia
                        </Link>
                        </li>
                        <li>
                        <Link to="/Provinsi">
                        Provinsi
                        </Link>
                        </li>
                    </ul> 

                </nav>

        <center>
            <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
                <Route path="/Indo">
                    <Indo />
                </Route>
                <Route path="/Global">
                    <Global />
                </Route>
            </Switch>
            </center>
        </div>
        </div>
        </Router>
    )
}

const Homepage = () => {
    return(
        <div className="padding">
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://imgur.com/H2S8L1n.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://imgur.com/xSH3ypm.png"
            alt="Third slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://imgur.com/dyfIgdI.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <div className="mt-5">
      <p className="welcome"><i>made by Damping, Glainhard A.A</i></p>
      </div>
      </div>
      
    )
}
export default App