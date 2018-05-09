import React, { Component } from 'react';
import debounce from 'lodash/debounce';

// var debounce = require('debounce');

export class Search extends Component {

    componentDidMount(){
        // this.onChange = debounce(this.props.onChange, 2000);
        // this.onKeyPress = debounce(this.props.onKeyPress, 7000);

        this.onChange = debounce(this.props.onChange, 500);
    }

    dupa = (e) => {
        e.persist();
        this.onChange(e.target.value);
    }

    render() {
        console.log('.');
        return (
            <div>
                <input value = {this.props.username} onChange={this.dupa}
                onKeyPress={this.props.onKeyPress}/>
                <button onClick={this.props.onSearch}>Search</button>                
            </div>
        );
    };
}