const {User} = require('./db/models')

async function signup({email, password}) {
  const user = await User.create({email, password})
  return user
}

async function login({email, password}) {
  const user = await User.findOne({where: {email}})
  if (!user) throw new Error('Wrong username and/or password')
  if (!user.correctPassword(password)) throw new Error('Wrong password')
  else return user
}

module.exports = {
  login,
  signup
}
