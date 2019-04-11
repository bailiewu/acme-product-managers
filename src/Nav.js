import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render() {
        const style1 = {
            margin: '20px'
        }
        return (
            <ul className="nav nav-pills" style={style1}>
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${this.props.location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className={`nav-link ${this.props.location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/managers" className={`nav-link ${this.props.location.pathname === '/managers' ? 'active' : ''}`}>Managers</Link>
                </li>
            </ul>
        )
    }
}
