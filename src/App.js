import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Products from './Products'
import Managers from './Managers'

import store from './store'

const home = () => {
    return <div>We HAVE openings for Product  Managers!</div>
}

export default class App extends Component {
    render() {
        // const { products } = this.state
        return (
            <HashRouter>
                <Provider store={store}>
                    <h1>Acme Products Managers</h1>
                    <Route render={(props) => <Nav {...props} />} />
                    <Route exact path="/" component={home} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/managers" component={Managers} />

                </Provider>

            </HashRouter>
        )
    }
}

