var React = require('react');
var Materialize = require('react-materialize');
var Button = Materialize.Button;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Materialize = require('react-materialize');
var Col = Materialize.Col;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function(){
    return (
      <MainContainer>
        <h1> Github Battle </h1>
        <p> Fancy Motto </p>
        <Link to='/playerOne'>
          <Button waves='light' className="btn-large">Get Started
          </Button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
