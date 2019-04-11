import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './store'
import Product from './product'

class Products extends Component {
    componentDidMount() {
        this.props.updateProducts()
    }

    // {workouts.map(workout => (
    //     <SingleWorkout key={workout.id} workout={workout} />
    //   ))}

    render() {
        const { products, managers } = this.props
        return (
            <ul id="products" className="list-group">
                {products.map(product => (
                    <Product product={product} managers={managers} key={product.id} />
                ))}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        managers: state.managers
    }
}
const mapDispatchToProps = dispatch => ({
    updateProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

