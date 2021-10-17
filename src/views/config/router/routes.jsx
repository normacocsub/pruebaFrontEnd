import React from 'react'
import {Switch, Route, BrowserRouter} from "react-router-dom";
import App from '../../../App';
import HomePage from '../../HomePage';
import Noticias from '../../pages/noticias';
import History from '../../pages/history';
import  Navbar  from '../../components/navbar/Nav';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';


const Routes = () => {
    return (
            <BrowserRouter>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                        color="inherit"
                        >
                
                            <Navbar/>
                
                        </TypoGraphy>
                    </Toolbar>
                </AppBar>

            <Switch>
                {/* HomePage */}
                <Route exact path="/" component={App} />
                {/*Noticias */}
                <Route exact path="/noticias" component={Noticias}/>
                {/* Historial*/}
                <Route exact path="/history" component={History}/>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Routes