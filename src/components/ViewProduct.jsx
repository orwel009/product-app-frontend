import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const ViewProduct = () => {
    const [product,changeProduct] = useState([
        {
            "productName":"HONEY",
            "price":"36",
            "category":"casaug",
            "imgurl":"https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg",
            "description":"dshfuihuieshguihsiuodh8oih"   
        },
        {
            "productName":"HONEY",
            "price":"36",
            "category":"casaug",
            "imgurl":"https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg",
            "description":"dshfuihuieshguihsiuodh8oih"   
        },
        {
            "productName":"HONEY",
            "price":"36",
            "category":"casaug",
            "imgurl":"https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg",
            "description":"dshfuihuieshguihsiuodh8oih"   
        },
        {
            "productName":"HONEY",
            "price":"36",
            "category":"casaug",
            "imgurl":"https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg",
            "description":"dshfuihuieshguihsiuodh8oih"   
        },
        {
            "productName":"HONEY",
            "price":"36",
            "category":"casaug",
            "imgurl":"https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg",
            "description":"dshfuihuieshguihsiuodh8oih"   
        }
    ])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {product.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.imgurl} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.productName}</h5>
                                                <p class="card-text">{value.price}</p>
                                                <Link to='' class="btn btn-primary">Add to cart</Link>
                                            </div>
                                            </div>
                                    </div>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct