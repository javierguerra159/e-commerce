import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from '../productDetail/ProductDescription';

const ProductDetail = () => {

    const {id} = useParams()

    const [ productInfo, setProductInfo ] = useState();

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then(res => setProductInfo(res.data.data.product))
        .catch(error => console.log(error.response))
    },[id])
    console.log(productInfo)
    return (
        <div>
            <ProductDescription productInfo={productInfo}/>
        </div>
    );
};

export default ProductDetail;