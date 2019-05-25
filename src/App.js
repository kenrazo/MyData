import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import GovernmentDetails from './my-data/government/government-details';
import AddressDetails from './my-data/address/address-details';
import BankDetails from './my-data/bank/bank-details';
import Home from './my-data/my-data';
import AddBank from './my-data/bank/bank-add';
import EditBank from './my-data/bank/bank-edit';

function App() {
  return (
    <Switch>
      <Route path="/bank" exact component={BankDetails} />
      <Route path="/government" exact component={GovernmentDetails} />
      <Route path="/address" exact component={AddressDetails} />
      <Route path="/" exact component={Home} />
      <Route path="/bank/new" exact component={AddBank} />
      <Route path="/bank/edit/:id" exact component={EditBank} />
      <Route path="*" component={Home} />
    </Switch>
  );
}

export default App;
