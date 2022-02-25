import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeReviewCard from "../../component/Card";
import "./Products.scss";
import { getProductsRequest } from "../../store/Products/ProductsAction";
import {
  addToCartRequest,
  getCategoriesRequest,
} from "../../store/Home/HomeAction";
import DropDown from "../../component/DropDown";

const Products = memo(() => {
  const categories = useSelector((state) => state?.shopping?.categories);
  const products = useSelector((state) => state?.allProduct?.products);
  const selectedCategory = useSelector(
    (state) => state?.shopping?.selectedCategory
  );

  const [localProducts, setLocalProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  useEffect(() => {
    if (!categories) {
      dispatch(getCategoriesRequest());
    }
  }, [categories]);

  useEffect(() => {
    if (products?.length) setLocalProducts(products);
  }, [products]);

  useEffect(() => {
    setTimeout(() => {
      if (selectedCategory && products) handleProductsFilter(selectedCategory);
    }, 1000);
  }, [selectedCategory]);

  const resetActive = () => {
    categories.forEach((item) => (item.isActive = false));
  };

  const handleProductsFilter = (item) => {
    if (!item?.isActive) resetActive();
    item["isActive"] = !item?.isActive;
    let filterProducts = [...products];
    if (item["isActive"]) {
      filterProducts = filterProducts.filter((k) => k?.category === item?.id);
      setLocalProducts(filterProducts);
    } else setLocalProducts(products);
  };

  const handleClick = (item) => {
    dispatch(addToCartRequest({ item, type: "add" }));
  };

  return (
    <div className="product-container">
      <nav>
        {categories?.map((item) => (
          <div
            className={
              item?.isActive
                ? "products-left-nav active"
                : "products-left-nav inactive"
            }
            key={item?.id}
            onClick={() => handleProductsFilter(item)}
          >
            {item?.name}
          </div>
        ))}
      </nav>
      <div className="mobile-dd">
        <DropDown
          listItem={categories}
          handleChangeAction={handleProductsFilter}
          selectedCategory={selectedCategory}
        />
      </div>

      <main>
        {localProducts?.map((item) => (
          <div className="card-wrap" key={item?.id}>
            <RecipeReviewCard
              item={item}
              handleClickAction={() => handleClick(item)}
            />
          </div>
        ))}
      </main>
    </div>
  );
});

export default Products;
