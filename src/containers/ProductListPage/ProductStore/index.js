import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import Layout from '../../../components/Layout';
import { generatePublicUrl } from '../../../urlConfig';
import Price from "../../../components/UI/Price";
import { Link } from 'react-router-dom';
import './style.css';


const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under500: 500,
        under1k: 1000
    });

    const dispatch = useDispatch();
    useEffect(() => {

        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);

    return (
        <Layout>

            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug} Services under {priceRange[key]} </div>
                                <button> view all</button>
                            </div>
                            <div style={{ display:'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link to={`/${product.slug}/${product._id}/p`} style={{display:'block'}}className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="img" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span> 45  </span>
                                                    <span> 76668</span>
                                                </div>
                                                <Price value={product.price} />
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    );
                })
            }
        </Layout>
    )
}

export default ProductStore
