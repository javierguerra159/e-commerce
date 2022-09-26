import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardHome = ({ product }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    }
    return (

        <article onClick={handleClick} className='card-home'>
            <header className='card-home__header'>
                <img className='card-home__img' src={product.productImgs?.[0]} alt='imagen' />
            </header>
            <div className='card-home__body'>
                <h3 className='card-home__name'>{product.title}</h3>
                <div className='card-home__two-container'>

                    <section className='card-home__price'>
                        <h4 className='card-home__price-label'>price</h4>
                        <span className='card-home__price-value'>{product.price}</span>
                    </section>

                    <button className='card-home__btn'><i className="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        </article>

    );
};

export default CardHome;