import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'

const ProductDescription = ({ productInfo }) => {

    const [counter, setCounter] = useState(1);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const handlePlus = () => setCounter(counter + 1);
    const handleMinus = () => {
        if (counter - 1 >= 1) {

            setCounter(counter - 1)
        }
    };
    console.log(productInfo)

    return (
        <div>
            <section className='product-info'>
                <div className='product-info__header'>
                    <p className='product-info__title-home'>home</p>
                    <b className='product-info__title'>{productInfo?.title}</b>
                </div>

                <div className='product-info__article-flex'>
                    <article className='product-info__article-slider'>

                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item className='carousel'>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={productInfo?.productImgs?.[0]}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item className='carousel'>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={productInfo?.productImgs?.[1]}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item className='carousel'>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={productInfo?.productImgs?.[2]}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>

                    </article>
                    <article className='product-info__article-price'>

                        <h2 className='product-info__name'>{productInfo?.title}</h2>
                        <p className='product-info__description'>{productInfo?.description}</p>
                        <div className='product-info__body'>
                            <article className='product-info__price'>
                                <h3 className='product-info__price-label'>price</h3>
                                <span className='product-info__price-value'>{productInfo?.price}</span>
                            </article>
                            <article className='product-info__quantity'>
                                <h3 className='product-info__quantity-label'>Quantity</h3>
                                <div className='product-info__quantity'>
                                    <button onClick={handleMinus}>-</button>
                                    <div>{counter}</div>
                                    <button onClick={handlePlus}>+</button>
                                </div>
                            </article>
                        </div>

                    </article>

                </div>




            </section>
        </div>
    );
};

export default ProductDescription;