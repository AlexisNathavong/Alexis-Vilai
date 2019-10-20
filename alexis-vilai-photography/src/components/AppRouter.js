import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';

import { Nav } from './StyledWidgets';
import BookingPage from './BookingPage';


const AppRouter = () => {
    return (
        <Router>
            <Nav>
                <div className="app-router">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutpage'>About</Link>
                    <Link to='/bookingpage'>Investment</Link>
                    <a href="https://alexisvilaiphotography.pixieset.com/" target="_blank">Portfolio</a>

                </div>
            </Nav>

            

            <Switch>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/aboutpage' component={AboutPage} />
                <Route path='/bookingpage' component={BookingPage} />
            </Switch>
        </Router>
    )
}

export default AppRouter;