import React from 'react';
import { Link } from 'react-router-dom';

export default class Navibar {
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <h1><Link className="navbar-brand" to="/">COVID19</Link></h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active pr-3">
                                <Link to="/" className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item ml-5 pr-3">
                                <Link to="/provinsi" className="nav-link">Provinsi</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link to="/global" className="nav-link">Data Global</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link to="/hotline" className="nav-link">Hotline Corona</Link>
                            </li>
                        </ul> 
                    </div>
                </nav>
            </div>
        )
    }
}