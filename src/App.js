import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Provinsi } from './pages'


function App() {
    return (
        <Router>
            <div className='background'>
                <nav className='nav'>  
                <h1 className='text'> Covid-19 Tracker</h1>
                    <ul>
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
        </Router>
    )
}

export default App