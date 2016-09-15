var axios = require('axios');
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";

var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
  getPlayersInfo: function(players){
    //get data from github using Axios
    return axios.all(players.map(function(player){
      return getUserInfo(player)
    })).then(function(userInfo){
      return userInfo.map(function(user){
        return user.data
      })
    }).catch(function(err){
      console.warn("error in getPlayersInfo", err);
    })
  }
};

module.exports = helpers;
