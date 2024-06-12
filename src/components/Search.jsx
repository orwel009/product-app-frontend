import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = () => {
    const [data,getData] = useState(
        {
            "productName":"",
        }
    )
    const [result,changeResult] = useState([])
 
    // Value Fecthing
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    // Search event handling
    const readValue = ()=>{
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                changeResult(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }

  return (
    <div>
      <Navbar/>
      <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <input type="text" className="form-control" placeholder='Enter Product Name...'
                            name='productName' value={data.productName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                    <div className="row g-3">
                        {result.map(
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

export default Search