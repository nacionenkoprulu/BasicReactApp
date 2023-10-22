import React from 'react' 
import { arr, products } from '../utils/datas'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <div>Dashboard</div>
        {/*Programda dinamik bir şekilde işlem yapacaksan süslü parantez kullanman lazım.Örn: {çağrılacak yapı}*/}
        
        {/*Map: For, Foreach gibi bir yapıdır. TypeScript'te map çok kullanılır...*/}
        {/*TypeScript'te for gibi loop yerine map yapısı kullanılır. Dizi vb. tüketilebilir yapıların içindeki ögelerin otamatik olarak üretilmesini sağlar.*/}
        {/*item: value item------ index: iterasyon */}
        {arr.map((item, index) => 
          <li key={index}> {/*Her oluşturduğun elemente/componente benzersiz bir 'key' ataması yapılması gerekir.*/}
            <NavLink to={'/cityDetail/'+item}>{item}</NavLink>
          </li>
          
        )} 
        
        <h3>Products</h3>
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item, index)=>
          <tr key={index}>
            <th scope="row"><NavLink to={'/productDetail/'+item.id}>{item.id}</NavLink></th>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.detail}</td>
          </tr>
        )}
          
        </tbody>
      </table>    
    </>
  )
}
export default Dashboard