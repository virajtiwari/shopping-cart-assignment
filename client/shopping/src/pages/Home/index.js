import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesRequest, getBannersRequest } from "../../store/Home/HomeAction";
import "./Home.scss";
import SwipeableTextMobileStepper from "../../component/Carousel";
import { Example } from "../../component/Carousel/CarouselD";

export default function Home() {
  const categories = useSelector(state => state?.shopping?.categories);
  const banners = useSelector(state => state?.shopping?.banners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannersRequest());
    dispatch(getCategoriesRequest());
  }, []);

  return (
    <div className="home">
     {banners && <SwipeableTextMobileStepper carouselItem={banners} />}
      {/* <Example carouselItem={banners}/> */}
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
                <button
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Explore {item?.key}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
