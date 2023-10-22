import React from 'react'
import {useParams} from 'react-router-dom'

function ProductDetail() {

  const {pId} = useParams() 

  return (
    <h2>{pId}</h2>
  )
}

export default ProductDetail