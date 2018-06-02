import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
import { connect } from 'react-redux';
import {selectApiData, selectUsername} from './App.selectors';
import { bindActionCreators } from 'redux';
import {getAPIData, setUsername} from './App.actions';

class App extends Component {

  getRepos = (username) => {
    this.props.actions.getAPIData(username);
  }

  getUser = (value) => {
    this.props.actions.setUsername(value);
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.getRepos(this.props.username);
    }
  }
componentWillMount() {
  const username = this.props.match.params.username || '';
  this.getRepos(username);
}
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
      <Search username={this.props.username} onChange={this.getUser} onSearch={this.getRepos} onKeyPress={this.handleEnter}/>
        <RepoList data={this.props.data.message ? [] : this.props.data } />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: selectApiData(state),
  username: selectUsername(state),

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, setUsername }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
