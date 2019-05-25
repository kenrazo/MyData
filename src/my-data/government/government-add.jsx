import React, { Component } from "react"
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


class AddGovernment extends Component {
    render() {
        return (
            <div>
                <form className={this.props.classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={this.props.classes.textField}
                        margin="normal"
                    />
                </form>
            </div>
        )
    }
}

AddGovernment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGovernment);