import React, { Component } from 'react';

export class Search extends Component {

    render() {
        return (
            <div>
                <input value = {this.props.username}/>
                <button>Search</button>                
            </div>
        );
    };
}