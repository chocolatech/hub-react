import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
import { helper } from './helpers/http';
import { AppProvider, AppContext } from './AppProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  getRepos = () => {
    const ENDPOINT = `/users/${this.state.username}/repos`;
    helper((body) => this.setState({ data: body }), ENDPOINT);
  }

  getUser = (value) => {
    this.setState({ username: value })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.getRepos();
    }
  }

  // componentDidMount() {
  //   this.getRepos();
  // }

  render() {
    return (
      <AppProvider>
        <Search username={this.state.username} onChange={this.getUser} onSearch={this.getRepos} onKeyPress={this.handleEnter} />

        <AppContext.Consumer>
          {context =>
            <RepoList data={context.data} />
          }
        </AppContext.Consumer>

      </AppProvider>
    );
  }
}

export default App;
