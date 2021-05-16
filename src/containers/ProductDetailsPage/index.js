import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout';
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import './style.css';
import { generatePublicUrl } from '../../urlConfig';
import { addToCart } from "../../actions"


const ProductDetailsPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);


    useEffect(
        () => {
            const { productId } = props.match.params;
            console.log(props);
            const payload = {
                params: {
                    productId
                }
            }
            dispatch(getProductDetailsById(payload));
        }
        , []);

    if (Object.keys(product.productDetails).length === 0) {
        return null;
    }


    return (
        
            <Layout>
                {/* <div>{product.productDetails.name}</div> */}
                <div className="productDescriptionContainer">
                    <div className="flexRow">
                        <div className="productDescContainer">
                            <div className="productDescImgContainer">
                                 <img
                                    src={generatePublicUrl(product.productDetails.productPictures[0].img)}
                                    alt={`${product.productDetails.productPictures[0].img}`}
                                /> 
                            </div>

                            {/* action buttons */}
                            <div className="flexRow">
                                <MaterialButton
                                    title="ADD TO CART"
                                    bgColor="#ff9f00"
                                    textColor="#ffffff"
                                    style={{
                                        marginRight: "5px",
                                        marginBottom: "5px"

                                    }}
                                    icon={<IoMdCart />}
                                    onClick={() => {
                                        const { _id, name, price } = product.productDetails;
                                         const img = product.productDetails.productPictures[0].img;
                                         dispatch(addToCart({ _id, name, price, img }));
                                        props.history.push(`/cart`);
                                     }}
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* home > category > subCategory > productName */}
                        <div className="breed">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                    <IoIosArrowForward />
                                </li>
                                <li>
                                    <a href="#">{product.productDetails.name}</a>
                                </li>
                            </ul>
                        </div>
                        {/* product description */}
                        <div className="productDetails">
                            <p className="productTitle">{product.productDetails.name}</p>                         
                            <div className="flexRow priceContainer">
                                <span className="price">
                                    <BiRupee />
                                    {product.productDetails.price}
                                </span>
                                
                                {/* <span>i</span> */}
                            </div>
                            <div>
                                <p
                                    style={{
                                        color: "#212121",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                    }}
                                >
                                    Available Offers
                                </p>
                                <p style={{ display: "flex" }}>
                                    <span
                                        style={{
                                            width: "100px",
                                            fontSize: "12px",
                                            color: "#878787",
                                            fontWeight: "600",
                                            marginRight: "20px",
                                        }}
                                    >
                                        Description
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "#212121",
                                        }}
                                    >
                                        {product.productDetails.description}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        
    )
}

export default ProductDetailsPage
