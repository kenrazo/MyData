import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";


const styles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    iconMargin: {
        marginRight: 30,
        marginBottom: 30

    }
});


class CommonApBar extends Component {
    state = {
        menu: false
    }

    handleMenu(e) {
        let menuValue = this.state.menu;
        this.setState({
            menu: !menuValue
        })
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={this.props.classes.menuButton}
                        color="inherit" 
                        aria-label="Menu"
                        onClick={this.handleMenu.bind(this)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={this.props.classes.title}>
                            My Data
                        </Typography>
                    </Toolbar>
                </AppBar>   
                <SwipeableDrawer
                    open={this.state.menu}
                    onClose={this.handleMenu.bind(this)}
                    onOpen={this.handleMenu.bind(this)}
                >
                    <List>
                        <Divider/>
                        <ListItem button component={Link} to="/government">
                            <ListItemIcon><InboxIcon className={this.props.classes.iconMargin}/>Government</ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to="/bank">
                            <ListItemIcon><MailIcon className={this.props.classes.iconMargin}/>Bank</ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to="/address">
                            <ListItemIcon><InboxIcon className={this.props.classes.iconMargin}/>Address</ListItemIcon>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </div>
        )
    }
}
CommonApBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CommonApBar);