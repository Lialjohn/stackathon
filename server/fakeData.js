const users = [
  {
    id: 1,
    email: 'cody@email.com',
    password: 123,
    posts: [
      {
        id: 1,
        content: "I'm hungry",
        posted: '11 hours ago'
      },
      {
        id: 2,
        content: "Where's my foods",
        posted: '11 hours ago'
      }
    ]
  },
  {
    id: 2,
    email: 'emperorp@dstar.com',
    password: 123,
    posts: [
      {
        id: 3,
        content: 'something something darkside',
        posted: '2 days ago'
      }
    ]
  }
]

module.exports = users
