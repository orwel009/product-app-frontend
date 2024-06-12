import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct = () => {
    const [data,changeData] = useState(
        {
            "productName":"",
            "price":"",
            "category":"",
            "imgurl":"",
            "description":""   
           }
    )
    const inputHandler = (event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Product Added")
                } else {
                    alert("An error occured")
                }
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
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ProductName</label>
                            <input type="text" className="form-control" name='productName' value={data.productName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="category" value={data.category} onChange={inputHandler} id="" className="form-control">
                                <option value="Fashion">Fashion</option>
                                <option value="Electronics">Electronics</option>
                                <option value="SmartPhones">SmartPhones</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="url" className="form-control" name='imgurl' value={data.imgurl} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea name="description" value={data.description} id="" className="form-control" onChange={inputHandler}></textarea>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>AddProduct</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct