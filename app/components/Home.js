var React = require('react');
var Materialize = require('react-materialize');
var Button = Materialize.Button;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Home = React.createClass({

  render: function(){
    return (
      <div className='col s12 center-align'>
        <h1> Github Battle </h1>
        <p> Fancy Motto </p>
        <Link to='/playerOne'>
          <Button waves='light' className="btn-large">Get Started
          </Button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
