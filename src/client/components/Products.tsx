import React from 'react';

type Props = {};

const Products = (props: Props) => {
  return (
    <section className="py-8 border-b">
      <div className="container flex flex-wrap pt-4 pb-12 mx-auto">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-900">
          Some Customer Favorites
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden bg-white rounded-lg rounded-b-none shadow-lg ">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Candle Title</div>
              <p className="px-6 mb-5 text-base text-gray-800">description of candle</p>
            </a>
          </div>
          <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
            <div className="flex items-center justify-start">
              <button className="px-8 py-4 mx-auto my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
                Action
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Candle Title</div>
              <p className="px-6 mb-5 text-base text-gray-800">description of candle</p>
            </a>
          </div>
          <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
            <div className="flex items-center justify-center">
              <button className="px-8 py-4 mx-auto my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
                Action
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Candle Title</div>
              <p className="px-6 mb-5 text-base text-gray-800">description of candle</p>
            </a>
          </div>
          <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
            <div className="flex items-center justify-end">
              <button className="px-8 py-4 mx-auto my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
