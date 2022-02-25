import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoriesRequest, getBannersRequest, addSlectedKey } from "../../store/Home/HomeAction";
import "./Home.scss";
import SwipeableTextMobileStepper from "../../component/Carousel";
import Button from '../../component/Button';

export default function Home() {
  const categories = useSelector(state => state?.shopping?.categories);
  const banners = useSelector(state => state?.shopping?.banners);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBannersRequest());
    dispatch(getCategoriesRequest());
  }, []);

  return (
    <div className="home">
     {banners && <SwipeableTextMobileStepper carouselItem={banners} />}
      <div className="item">
        {categories
          ?.filter((k) => k?.imageUrl)
          .map((item, index) => (
            <div
              className="item-display"
              key={item?.id}
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <div className="item-img">
                <img src={item?.imageUrl} alt="logo"/>
              </div>
              <div className="item-description">
                <label>{item?.name}</label>
                <label>{item?.description}</label>
                <Button
                  handleClickHandler={() => {
                    console.log("clicked");
                    dispatch(addSlectedKey(item));
                    navigate('/products');
                  }}
                >
                  Explore {item?.key}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
