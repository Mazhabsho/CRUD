import React from 'react'
import { useParams } from 'react-router-dom'

const Read = () => {
    const {id} = useParams()
  return (
    <div>Read</div>
  )
}

export default Read