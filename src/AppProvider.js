import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
    state = { data: []};
    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}