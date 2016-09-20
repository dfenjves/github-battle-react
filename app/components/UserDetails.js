var React = require('react');
var PropTypes = React.PropTypes;
var Materialize = require('react-materialize');
var Card = Materialize.Card;
var CardTitle = Materialize.CardTitle;
var Collection = Materialize.Collection;
var CollectionItem = Materialize.CollectionItem;
// var Table = Materialize.Table;

function UserDetails(user){
  return(
    <div>
      <Card className='large'
        header={<CardTitle image={user.info.avatar_url}>{user.info.login}</CardTitle>}>
          {!!user.score && <CollectionItem>Score: {user.score}</CollectionItem>}
          {user.info.name && <CollectionItem>Name: {user.info.name}</CollectionItem>}
          {user.info.location && <CollectionItem>Location: {user.info.location}</CollectionItem>}
          {user.info.company && <CollectionItem>{user.info.name}</CollectionItem>}
          <CollectionItem>Followers: {user.info.followers}</CollectionItem>
          <CollectionItem>Following: {user.info.following}</CollectionItem>
          <CollectionItem>Public Repos: {user.info.public_repos}</CollectionItem>
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
