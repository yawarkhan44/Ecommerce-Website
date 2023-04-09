import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
        <div className="card">
            <div className="image">
                {item.isNew && <span>Hot deal!</span>}
                <img src={item.img} alt="" className="mainImage" />
                <img src={item.img2} alt="" className="secondaryImage" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                {/* <h3>${item.oldPrice}</h3> */}
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card