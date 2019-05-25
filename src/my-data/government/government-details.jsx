import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class GovernmentDetails extends Component {
    state = {
        governmentDetails: {
            sss: '123',
            tin: '456',
            pagibig: '789',
            philhealth: '000'
        },
    }


    handleInnerOnChange(page) {
        this.props.handleChangePage(page);
    }

    render() {
        return (
            <div>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">SSS</TableCell>
                                <TableCell align="right">Tin</TableCell>
                                <TableCell align="right">Pagibig</TableCell>
                                <TableCell align="right">Philhealth</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell align="right"> {this.state.governmentDetails.sss}</TableCell>
                                <TableCell align="right">{this.state.governmentDetails.tin}</TableCell>
                                <TableCell align="right">{this.state.governmentDetails.pagibig}</TableCell>
                                <TableCell align="right">{this.state.governmentDetails.philhealth}</TableCell>
                                <TableCell align="right"><Button variant="contained"
                                    color="primary"
                                    onClick={this.handleInnerOnChange.bind(this, 'addGovernment')}>
                                    Add
                            </Button>
                                    <Button variant="contained" color="primary">
                                        Edit
                            </Button>
                                    <Button variant="contained" color="secondary">
                                        Delete
                            </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>

        )

    }
}
GovernmentDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GovernmentDetails);