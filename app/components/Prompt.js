var React = require('react');
var Materialize = require('react-materialize');
var Button = Materialize.Button;
var PropTypes = React.PropTypes;

function Prompt(props){
  return (
    <div className="col s6 offset-s3 center-align">
      <h1>{props.header}</h1>
      <div className="col s12">
        <form onSubmit={props.onSubmitUser}>
          <div className="input-field">
            <input placeholder="Github Username"
            id="username"
            onChange={props.onUpdateUser}
            value={props.username}
            type="text" />
          </div>
          <div className="col s4 offset-s4 center-align">
            <Button waves='light' type="submit">Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
