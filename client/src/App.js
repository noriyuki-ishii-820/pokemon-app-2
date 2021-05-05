import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import NavbarComponent from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
        <Router>
            <NavbarComponent />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
            
        </>
    )
}

export default App