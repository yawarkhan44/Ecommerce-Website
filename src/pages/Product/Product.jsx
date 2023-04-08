import React from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {

  const [selectedImage, setSelectedImage] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)

  const images = [
    "https://images.pexels.com/photos/5442594/pexels-photo-5442594.jpeg?cs=srgb&dl=pexels-pegah-sharifi-5442594.jpg&fm=jpg&w=1920&h=2400&_gl=1*14zgiwe*_ga*OTQ1Njg3OTE4LjE2ODA4MzA5Njg.*_ga_8JE65Q40S6*MTY4MDgzMDk2OS4xLjEuMTY4MDgzMTI1Mi4wLjAuMA..",
    "https://images.pexels.com/photos/5438403/pexels-photo-5438403.jpeg?cs=srgb&dl=pexels-pegah-sharifi-5438403.jpg&fm=jpg&w=1920&h=2400&_gl=1*1wood4k*_ga*OTQ1Njg3OTE4LjE2ODA4MzA5Njg.*_ga_8JE65Q40S6*MTY4MDgzMDk2OS4xLjEuMTY4MDgzMTI1Mi4wLjAuMA.."
  ]
  return (
    <div className="product">
      <div className="leftSection">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="rightSection">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Some random text</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev - 1)} >-</button>
            {quantity}
          <button onClick={()=>setQuantity(prev=>prev + 1)} >+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add to cart
        </button>
        <div className="info">
          <span>Brand: X</span>
          <span>Type: X</span>
          <span>Tags: X. Y, Z</span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              repr
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product