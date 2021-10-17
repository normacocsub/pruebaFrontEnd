import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox, HistoryOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Navbar = (props) => {
    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText button inset>
                <li>
                            <Button startIcon={<Home />} component={Link} to={'/'} variant="text" color="inherit" >
                                Home 
                            </Button>
                        </li>   
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <li>
                            <Button startIcon={<Book />} component={Link} to={'/noticias'} variant="text" color="inherit" >
                                Noticias 
                            </Button>
                        </li>    
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <li>
                            <Button startIcon={<HistoryOutlined />} component={Link} to={'/history'} variant="text" color="inherit" >
                                Historico
                            </Button>
                        </li>    
                    </TypoGraphy>
                </ListItemText>

            </ListItem >

        </List>
    )
} 
export default Navbar;