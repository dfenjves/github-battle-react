var React = require('react');
var Materialize = require('react-materialize');
var Col = Materialize.Col;

function UserDetailsWrapper(props){
  return (
    <Col s={6}>
      <h3>{props.header}</h3>
      {props.children}
    </Col>
  )
}

module.exports = UserDetailsWrapper;
