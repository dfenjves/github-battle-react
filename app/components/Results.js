var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Materialize = require('react-materialize');
var Col = Materialize.Col;
var Button = Materialize.Button;
var Row = Materialize.Row;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link
var MainContainer = require('./MainContainer');

// function puke(object){
//   return(
//     <p>{JSON.stringify(object, null,' ')}</p>
//   )
// }

function StartOver() {
  return(
      <Link to='/playerOne' >
        <Button waves='light'>
          Start Again
        </Button>
      </Link>
  )
}

function Results(props){
  if (props.isLoading === true){
    return(
      <p>Loading</p>
    )
  }

  if (props.scores[0] === props.scores[1]){
    return(
      <MainContainer>
        <h2> It's a Tie!</h2>
        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return(
    <MainContainer>
        <h1> Results</h1>
        <Row>
          <Col s={10} className="offset-s1">
            <UserDetailsWrapper header="Winner">
              <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Loser">
              <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
            </UserDetailsWrapper>
          </Col>
        </Row>
        <Col s={8} className="offset-s2">
          <Col s={12} style={styles.space}>
            <StartOver />
          </Col>
        </Col>
    </MainContainer>
  )
}

Results.PropTypes ={
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
