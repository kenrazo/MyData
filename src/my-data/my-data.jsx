import React, { Component } from "react"
import GovernmentDetails from "./government/government-details";
import BankDetails from "./bank/bank-details";
import AddressDetails from "./address/address-details";
import AddGovernment from "./government/government-add";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class MyData extends Component {
    state = {
        page: 'governmentPage'
        
    }
    handleChangePage(page) {
        this.setState({ page: page })
    }

    render() {
        return (
            <div>
                <Paper square>
                    <Tabs
                        value={this.state.value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Government" onClick={this.handleChangePage.bind(this, 'governmentPage')} />
                        <Tab label="Bank" onClick={this.handleChangePage.bind(this, 'bankPage')} />
                        <Tab label="Address" onClick={this.handleChangePage.bind(this, 'addressPage')} />
                    </Tabs>
                </Paper>
                {this.state.page === 'governmentPage' ?
                    <GovernmentDetails handleChangePage={this.handleChangePage.bind(this)} /> : null}
                {this.state.page === 'bankPage' ?
                    <BankDetails /> : null}
                {this.state.page === 'addressPage' ?
                    <AddressDetails /> : null}
                {this.state.page === 'addGovernment' ?
                    <AddGovernment /> : null}




            </div>
        )
    }
}

export default MyData;