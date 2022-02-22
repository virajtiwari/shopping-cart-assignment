import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import RecipeReviewCard from "../../component/Card";
import "./Products.scss";
import { Link } from "react-router-dom";
import { getProductsRequest } from "../../store/Products/ProductsAction";

const Products = memo((props) => {
  const categories = useSelector((state) => state?.shopping?.categories);
  const products = useSelector((state) => state?.allProduct?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  return (
    <div className="product-container">
      <nav>
        {categories?.map((item) => (
          <div className="products-left-nav" key={item?.id}>
            {/* <Link to={item?.key}>{item?.name}</Link> */}
            {item?.name}
          </div>
        ))}
      </nav>
      <main>
        {products?.map(item=>(
          <div className="card-wrap">
            <RecipeReviewCard item={item}/>
          </div>
        ))}
      </main>
    </div>
  );
});

Products.propTypes = {};

export default Products;
