import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { saveToDb } from "../../database";

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
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
});


class BankAdd extends Component {
    state = {
        name: '',
        accountNo: '',
        expiration: ''
    }

    handleOnChange(property,e){
        this.setState({ [property]: e.target.value });
    }

    handleGoBack(e){

    }

    save() {
        var toBeInserted = {
            name: this.state.name,
            accountNo: this.state.accountNo,
            expiration: this.state.expiration
        }
        var result = saveToDb('bank', toBeInserted, (event) => {
            this.props.history.push("/bank"); 
        });   
        
         
    }
    render() {
        return (
            <div>
                <Link to="/bank">Back to list</Link>>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={this.props.classes.textField}
                    margin="normal"
                    value={this.state.name}
                    onChange={this.handleOnChange.bind(this, "name")}
                />

                <TextField
                    id="standard-uncontrolled"
                    label="Account no"
                    className={this.props.classes.textField}
                    margin="normal"
                    value={this.state.accountNo}
                    onChange={this.handleOnChange.bind(this, "accountNo")}
                />

                <TextField
                    required
                    id="standard-required"
                    label="Expiration"
                    className={this.props.classes.textField}
                    margin="normal"
                    value={this.state.expiration}
                    onChange={this.handleOnChange.bind(this, "expiration")}
                />
                <Button variant="contained" className={this.props.classes.button} onClick={this.save.bind(this)}>
                    Save
               </Button>
            </div>
        )
    }
}


BankAdd.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankAdd);
