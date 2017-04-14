var data = require("./users.js")

module.exports = {

  readAll: function(){
    return data.users;
  },

  findUserById: function(userId){
    data.users.findOne()
  }




}
