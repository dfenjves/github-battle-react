var React = require('react');
var PropTypes = React.PropTypes;
var Materialize = require('react-materialize');
var Card = Materialize.Card;
var CardTitle = Materialize.CardTitle;
// var Table = Materialize.Table;

function UserDetails(user){
  return(
    <div>
      <Card className='small'
        header={<CardTitle image={user.info.avatar_url}>{user.info.login}</CardTitle>}>
        {!! user.score && <li>{user.info.score}</li>}
        {user.info.name && <li>{user.info.name}</li>}
        {user.info.location && <li>{user.info.location}</li>}
        {user.info.company && <li>{user.info.name}</li>}
        <li>Followers: {user.info.followers}</li>
        <li>Following: {user.info.following}</li>
        <li>Public Repos: {user.info.public_repos}</li>
      </Card>
    </div>
  )
}

UserDetails.PropTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;
