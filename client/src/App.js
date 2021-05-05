import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import NavbarComponent from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
        <Router>
            <NavbarComponent />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
            </Switch>
        </Router>
            
        </>
    )
}

export default App