import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        imageURL: 'https://picsum.photos/200'
    };


    render() { 
        return (
            <div>
                <img src={this.state.imageURL} alt=""/>
                <span styles={{fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;