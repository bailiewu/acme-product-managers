import React, { Component } from 'react';
import Managers from './Managers'

export default class Product extends Component {

    render() {
        // console.log(this.props.product.manager)
        const { product, managers } = this.props
        const managerNames = managers.map(manager => manager.name)
        console.log(managerNames)
        // console.log('managers:', managers, 'My manager:', product.manager ? product.manager.name : 'DNE')
        return (
            <li id="product" className="list-group-item">
                {product.name}
                <div />
                <i>Product Manager</i>
                <div />
                {/* {product.manager ? product.manager.name : ''} */}
                {/* <Managers manager={product.manager ? product.manager : {}} /> */}
            </li>
        )
    }
}
