import React from 'react'
import { useDataStore } from '../../State/state'

export const MyPosts = () => {

    const user = useDataStore((state) => state.user)
    console.log(user)

  return (
    <div>
        <h1>My Posts</h1>

    </div>
  )
}
