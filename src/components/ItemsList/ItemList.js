import React from "react";
import { useNavigate } from "react-router-dom";
import { moneyFormat } from "utils/functions";
import { StyledList } from "./style";
import LikeButton from "components/LikeButton";

const ItemList = ({ items, page }) => {
  const navigate = useNavigate();

  const showList = () => {
    const list = [];
    for (let i = page * 4; i < page * 4 + 4; i++) {
      if (items[i]) {
        list.push(
          <div className="flex flex-col list group" key={items[i].id}>
            <div className="py-5 flex flex-col sm:flex-row items-center sm:items-start">
              <div className="flex justify-center max-w-15rem w-full order-2 sm:order-1">
                <img
                  className="h-52 cursor-pointer"
                  src={items[i].thumbnail}
                  alt={items[i].title}
                  onClick={() => navigate(`/items/${items[i].id}`)}
                />
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-5 order-3 sm:order-2">
                <span
                  className="text-lg sm:text-xl font-light max-w-md cursor-pointer mt-5"
                  onClick={() => navigate(`/items/${items[i].id}`)}
                >
                  {items[i].title}
                </span>
                <span className="mt-3 text-xl sm:text-2xl">
                  {moneyFormat(items[i].price?.amount)}
                </span>
                {items[i].free_shipping && (
                  <span className="text-sm font-medium text-green-600 mt-3">
                    Frete grátis
                  </span>
                )}
              </div>
              <div className="flex items-start ml-auto sm:mt-6 mr-8 opacity-0 group-hover:opacity-100 order-1 sm:order-3">
                <LikeButton />
              </div>
            </div>
            <hr className="my-5 border-gray-200 mx-8" />
          </div>
        );
      }
    }
    return list;
  };
  return <StyledList>{showList()}</StyledList>;
};

export default ItemList;
