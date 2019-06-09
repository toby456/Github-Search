import React from 'react';

const Repo = props => (
  <div>
    <a href={props.url} > {props.name} </a>
    <br/>
    <span>{props.description}</span>

    <br/>
  </div>
);

export default Repo;
