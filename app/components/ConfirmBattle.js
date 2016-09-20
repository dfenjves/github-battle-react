var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var Materialize = require('react-materialize');
var Col = Materialize.Col;
var Button = Materialize.Button;
var Row = Materialize.Row;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');

function puke(object){
  return(
    <p>{JSON.stringify(object, null,' ')}</p>
  )
}

function ConfirmBattle(props){
  return props.isLoading === true
  ? <p> Loading </p>
  : <MainContainer>
      <h1> Confirm Players</h1>
        <Row>
        <Col s={10} className="offset-s1">
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>
        </Col>
        </Row>
      <Col s={8} className="offset-s2">
        <Col s={12} style={styles.space}>
          <Button waves='light' onClick={props.onInitiateBattle}>
            Battle
          </Button>
        </Col>
        <Col s={12} style={styles.space}>
          <Link to='/playerOne'>
            <Button waves='light'>
              Reselect Players
            </Button>
          </Link>
        </Col>
      </Col>
  </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
