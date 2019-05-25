import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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


class BankEdit extends Component {
    state = {
        name: '',
        accountNo: '',
        expiration: '',
    }

    componentDidMount(){
        let db = indexedDB.open("MyData");
        let id = Number(this.props.match.params.id);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(["bank"], "readonly");
            let store = tx.objectStore('bank');
            let allItems = store.get(id);
            allItems.onsuccess = (event) => {
                console.log(event.target.result);
               // this.setState({bank: event.target.result})
                this.setState({name: event.target.result.name,
                    accountNo: event.target.result.accountNo,
                    expiration: event.target.result.expiration
                });
            }
        }
    }

    handleOnChange(property,e){
        this.setState({ [property]: e.target.value });
    }

    handleGoBack(e){

    }

    save() {
        let db = indexedDB.open("MyData");
        var toBeInserted = {
            bankId: Number(this.props.match.params.id),
            name: this.state.name,
            accountNo: this.state.accountNo,
            expiration: this.state.expiration
        }
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(['bank'], "readwrite");
            let store = tx.objectStore('bank');
            store.put(toBeInserted);
            tx.oncomplete = (event) => {
                this.props.history.push("/bank");
            }
            tx.onerror = (event) => {

            }
        }
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


BankEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankEdit);
