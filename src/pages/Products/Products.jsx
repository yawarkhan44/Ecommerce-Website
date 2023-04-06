import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./Products.scss"

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);


  return (
    <div className="products">
      <div className="leftSection">
        <div className="filterItem">
          <h2>Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="1">Coats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="1">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={e=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="sortByPrice" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="sortByPrice" onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <img src="https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg?cs=srgb&dl=pexels-rodnae-productions-8580765.jpg&fm=jpg&w=1920&h=1280&_gl=1*fgu0d2*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDc0NzExOC41LjEuMTY4MDc0NzIzNy4wLjAuMA.." 
        alt="" 
        className="categoryImage" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products