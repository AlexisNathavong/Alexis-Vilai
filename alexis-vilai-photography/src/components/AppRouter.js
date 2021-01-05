import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';

import { Nav } from './StyledWidgets';
import BookingPage from './BookingPage';
import NewsPage from './NewsPage';
// import ContactPage from './ContactPage';
import Info from './Info';

const AppRouter = () => {
    return (
        <Router>
            <Nav>
                <div className="app-router">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutpage'>About</Link>
                    <Link to='/bookingpage'>Investment</Link>
                    <a href="https://alexisvilaiphotography.pixieset.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    {/* <Link to='/contactpage'>Contact</Link> */}
                    <Link to='/newspage'>What's New</Link>
                    <Link to='/info'>Q&A</Link>

                </div>
            </Nav>

            

            <Switch>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/aboutpage' component={AboutPage} />
                <Route path='/bookingpage' component={BookingPage} />
                {/* <Route path='/contactpage' component={ContactPage} /> */}
                <Route path='/newspage' component={NewsPage} />
                <Route path='/info' component={Info} />

            </Switch>
        </Router>
        
    )

    
}

export default AppRouter;