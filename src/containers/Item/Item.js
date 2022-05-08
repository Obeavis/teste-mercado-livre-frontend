import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "contexts/StateContext";
import { getItem } from "services/apiService";
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import { moneyFormat } from "utils/functions";
import CustomCarousel from "components/CustomCarousel";

const Item = () => {
  const { dispatch } = useContext(StateContext);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    if (id) {
      (async () => {
        try {
          const { data } = await getItem(id);
          setItem(data);
          setPicture(data?.pictures?.[0]);
        } catch (error) {
          console.log(error);
        } finally {
          dispatch({ type: "LOADING", payload: false });
        }
      })();
    }
  }, [dispatch, id]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-secondary">
      <Header />
      <div className="container flex flex-col max-w-4xl mt-20">
        <Breadcrumb data={item?.categories} />
      </div>
      <div className="container flex flex-col max-w-4xl shadow-xl bg-white mt-5 mb-10 sm:px-10">
        <div className="flex flex-col sm:flex-row my-3 px-4 sm:px-0">
          <div className="hidden sm:block">
            {item?.pictures?.map((pic, i) => {
              return (
                i < 5 && (
                  <div
                    className="relative border-2 rounded-lg border-gray-300 w-20 p-1 my-3 hover:border-tertiary"
                    key={i}
                    onMouseEnter={() => setPicture(pic)}
                  >
                    <img
                      className={`object-scale-down h-20 w-20${
                        i > 3 ? " opacity-30" : ""
                      }`}
                      src={pic}
                      alt={item?.title}
                      key={i}
                    />
                    {i > 3 && (
                      <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 rounded-lg">
                        <div>
                          <span className="text-3xl text-tertiary">
                            +{item?.pictures?.length - 4}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              );
            })}
          </div>

          <CustomCarousel
            showThumbs={false}
            showIndicators={false}
            className="flex sm:hidden"
          >
            {item?.pictures?.map((pic, i) => {
              return (
                <div
                  className="flex flex-grow items-center justify-center max-w-sm w-full"
                  key={i}
                >
                  <img alt="" src={pic} className="object-scale-down w-full" />
                </div>
              );
            })}
          </CustomCarousel>

          <div className="hidden sm:flex flex-grow items-center justify-center max-w-sm w-full mx-5">
            <img src={picture} alt={item?.title} />
          </div>
          {item && (
            <div className="flex flex-col mt-3">
              <span className="text-gray-800 mb-2">
                {item?.condition} - {item?.sold_quantity} vendidos
              </span>
              <p className="text-2xl font-medium mb-4">{item?.title}</p>
              <p className="text-5xl mb-10">
                {moneyFormat(item?.price?.amount)}
              </p>
              <button className="bg-tertiary rounded-sm text-white px-5 py-2 hover:bg-blue-600 active:bg-blue-700">
                Comprar
              </button>
            </div>
          )}
        </div>
        {item?.description && (
          <div className="my-10 max-w-xl px-4 sm:px-0">
            <p className="text-2xl text-gray-800 font-medium mb-7">
              Descrição do produto
            </p>
            <p className="text-gray-600 break-words whitespace-pre-wrap">{item?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
