import React from 'react'
import './Item.css'

const Item = ({data}) => {
  return (
    <div>
        <div className="product" key={data.name}>
                    <img src={data.img} alt="" />
                    <h1>{data.name}</h1>
                    <h2>{data.price}</h2>
                </div>
    </div>
  )
}

export default Item