import React, { Component } from 'react'

class CardTitle extends Component {
    render() {
        console.log(this.props.title);
        const title = this.props.title;
        return (
            <div className='person-title'>
                <div className='title'>{title}</div>
            </div>
        )
    }
}

export default CardTitle
