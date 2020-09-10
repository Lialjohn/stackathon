import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

//now how do I get loggin in user data to persist :thinking thinking:
//keep using redux?
const id = 1

const GET_USER = gql`
{
  user(id: ${id}) {
    email
    password
  }
}`

// posts {
//   content
// }

const App = () => {
  const {loading, data} = useQuery(GET_USER)
  if (loading) return <div>Loading</div>
  return (
    <div>
      {data.user.email}
      {data.user.password}
      {/* <ul>
      {data.user.posts.map(post => <li key={post.id}>{post.content}</li>)}
      </ul> */}
    </div>
  )
}

export default App
