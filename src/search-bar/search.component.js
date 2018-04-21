import React, { Component } from 'react';

export class Search extends Component {

    render() {
        return (
            <div>
                <input value = {this.props.username} onChange={(event) => {this.props.onChange(event.target.value)}}/>
                <button onClick={this.props.onSearch}>Search</button>                
            </div>
        );
    };
}