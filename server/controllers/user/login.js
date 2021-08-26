const { user } = require('../../models/user');

module.exports = (req,res) =>{
   
    const { login_id, password } =req.body;
    User.findOne({
        where:{
          login_id,
          password
        }
    })
   console.log('aaa')
}