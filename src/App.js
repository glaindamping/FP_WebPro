  
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Provinsi } from './pages'

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <h1> Covid Tracker</h1>
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
                                       Pronvinsi
                            </Link>
                        </li>
                    </ul>
                    <p1>Jumlah Kasus Seluruh Dunia </p1>
                </nav>
            </div>
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
        </Router>
    )
}

export default App