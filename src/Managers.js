import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './store'

class Managers extends Component {
    componentDidMount() {
        this.props.updateProducts()
    }

    // {workouts.map(workout => (
    //     <SingleWorkout key={workout.id} workout={workout} />
    //   ))}

    render() {
        const { products } = this.props
        const managers = products.filter(product => product.manager).map(product => product.manager)
        return (
            <div>
                {managers.map((dude) => {
                    return (
                        <li key={dude.id}>
                            {dude.name}
                        </li>)
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => ({
    updateProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Managers);

