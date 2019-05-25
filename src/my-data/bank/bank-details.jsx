import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CommonAppBar from "./../../common-component/app-bar";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class BankDetails extends Component {
    state = {
        bank: []
    }

    componentDidMount() {
        this.getBank();
    }
    getBank() {
        let db = indexedDB.open("MyData");
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(["bank"], "readonly");
            let store = tx.objectStore('bank');
            let allItems = store.getAll();
            allItems.onsuccess = (event) => {
                //  console.log(event.target.result);
                this.setState({ bank: event.target.result });
            };
        };
    }

    handleDelete(id) {
        let db = indexedDB.open("MyData");
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(["bank"], "readwrite");
            let store = tx.objectStore("bank");
            store.delete(Number(id));
            tx.oncomplete = event => {
                this.getBank();
            }
            tx.onerror = event => {

            }
        }
    }

    render() {
        return (
            <div>
                <CommonAppBar/>
                <Button variant="contained" color="primary" className={this.props.classes.button}
                    component={Link} to={"/bank/new"}>
                    Add
                 </Button>
                <List className={this.props.classes.root} subheader={<li />}>
                    {this.state.bank.map(item => (
                        <ListItem key={item.bankId}>
                            <Link to={"/bank/edit/" + item.bankId} >{item.name}</Link>
                            <Button variant="contained" color="secondary" className={this.props.classes.button}
                                onClick={this.handleDelete.bind(this, item.bankId)}>
                                Delete
                          </Button>
                        </ListItem>
                    ))}
                </List>
            </div>

        )
    }
}

BankDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankDetails);