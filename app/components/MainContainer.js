var React = require('react');
var Materialize = require('react-materialize');
var Col = Materialize.Col;

var MainContainer = React.createClass({
  render: function(){
    return (
      <Col s={12} className="center-align">
      {this.props.children}
      </Col>
    )
  }
});

module.exports = MainContainer;
