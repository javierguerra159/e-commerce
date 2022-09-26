import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slices';
import CardHome from '../home/CardHome';

const Home = () => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
   
    return (
        <div >
            <div className='home__container__card'>
                {
                    products?.map(product => (

                        <CardHome
                            key={product.id}
                            product={product}
                        />

                    ))
                }


            </div>

        </div>
    );
};

export default Home;