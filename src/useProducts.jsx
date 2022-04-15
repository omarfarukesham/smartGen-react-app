import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const[products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setProducts(data.slice(0,9)))

    },[])


    return [products, setProducts]
};

export default useProducts;