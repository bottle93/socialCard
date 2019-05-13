import React, { Component } from 'react'

class CardName extends Component {
    render() {
        const person = this.props.person;
        return (
            <div className='person'>
                <div className='name'>{person.name}</div>
                <div className='surname'>{person.surname}</div>
            </div>
        )
    }
}

export default CardName
