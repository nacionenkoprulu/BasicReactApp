import React from 'react'
import {useParams} from 'react-router-dom'

function CityDetail() {

  //Aktif parametleri yakalamak için kullanırız. Bir hooks'dur. {} içinde birden fazla data gelme ihtimali vardır.
  //Tarayıcıdan gelen parametlereleri bu şekilde yakalayabilirsin.
  //'Data' route'de belirttiğin /:data şeklindeki parametredir
  const {data} = useParams() 

  return (
    <h2>{data}</h2>
  )
}

export default CityDetail