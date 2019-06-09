import React from 'react';
import NoRepos from './NoRepos';
import Repo from './Repo';

const RepoList = props => {

  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo name={repo.name} url={repo.html_url} description={repo.description} key={repo.id} date={repo.created} />);
  } else {
    repos = <NoRepos />
  }

  return(
    <ul className="repo-list">
      {repos[0]}
      {repos[1]}
      {repos[2]}
    </ul>
  );
}

export default RepoList;
