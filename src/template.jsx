import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});




class Template extends Component{

   classes = useStyles();
   state = {
     top: false,
     left: false,
     bottom: false,
     right: false
   }

   [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

   toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
    render(){
        return(
            <div>

            </div>
        )
    }
}


Template.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Template);
