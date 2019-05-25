import React, { Component } from "react"
import PropTypes from 'prop-types';
import CommonAppBar from './../common-component/app-bar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


class MyData extends Component {
    state = {
        menu: false
    }

    render() {
        return (
            <div>
                <CommonAppBar/>
            </div>
        )
    }
}
MyData.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MyData);