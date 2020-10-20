import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import BannerV2 from '../components/Banner/BannerV2.js'
import Header from '../components/Header/Header.js'
import ShopBody from "../components/Shop/ShopBody";
import bg from '../assets/S3.jpg'
import axios from 'axios'

function Men() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])
    
    return (
        <div className="Men">
            <Header/>
            <BannerV2 bannerImage={bg} position={'120px'}/>
            <ShopBody
                products={products}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Men;