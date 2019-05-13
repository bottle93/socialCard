import React, { Component } from 'react'

class CardAddress extends Component {
    render() {
        const person = this.props.person;
        return (
            <div className='address'>
                <div className='street'>{person.street}</div>
                <div className='city'>{person.city}</div>
                <div className='postalCode'>{person.zipCode}</div>
            </div>
        )
    }
}

export default CardAddress
