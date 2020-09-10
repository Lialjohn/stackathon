const User = require('./user')
const Channel = require('./channel')
const Post = require('./post')
const Reaction = require('./reaction')

User.belongsToMany(Channel, {through: 'userChannel'})
User.hasMany(Post)
Channel.belongsToMany(User, {through: 'userChannel'})
Channel.hasMany(Post)
Post.belongsTo(User)
Post.belongsTo(Channel)
// Post.belongsToMany(Reaction)
// Reaction.belongsToMany(Post, { through: 'postReaction' })

module.exports = {
  User,
  Post,
  Channel,
  Reaction
}
