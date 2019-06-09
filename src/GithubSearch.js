import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RepoList from './RepoList';
import moment from 'moment';

class GithubSearch extends React.Component {
  constructor(props) {
    super(props)

    let monthAgo = new Date();
     monthAgo = moment(monthAgo).subtract(1, 'month').format('YYYY-MM-DD');

    this.state = {
      language: '',
      repos: [],
      date: monthAgo
    }
  }

    onLanguageChange = e => {
      this.setState({ language: e.target.value });
    }

    performSearch = e => {
      e.preventDefault();

      axios.get('https://api.github.com/search/repositories?q=language:' + this.state.language + '+created:>' + this.state.date + '&sort=stars&order=desc')

      .then(response => {
        console.log(response);
        this.setState({
          repos: response.data.items
        });
        console.log(this.state.language);
        console.log(this.state.date);

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }


    render() {
        return (
          <div>
            <div className="main-header">
              <div className="inner">
                <h1 className="main-title">RepoSearch</h1>
                <form onSubmit={this.performSearch}>
                  <label className="is-hidden" htmlFor="search">Search
                  <input type="text"
                  
                  onChange={this.onLanguageChange}
                  placeholder="Search for a programming language" />
                  </label>
                  <input type="submit"  value="submit"/>
                </form>
                <br/>
                <br/>
                <h2>Repositories</h2>
                <div>
                <RepoList data={this.state.repos} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }




          ReactDOM.render(<GithubSearch />, document.getElementById('root'))

          export default GithubSearch;
