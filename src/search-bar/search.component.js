import React, { Component } from 'react';

export class Search extends Component {

    render() {
        return (
            <div onSubmit={() => this.props.onSubmit()}>
                <input value = {this.props.username} onChange={(event) => {this.props.onChange(event.target.value)}}/>
                <button type="submit">Search</button>                
            </div>
        );
    };
}