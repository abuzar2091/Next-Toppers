import React from 'react'

function ShopHeader() {
  return (
      <div className="flex flex-col  sm:items-start justify-start items-center mx-12 my-8  gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
        <h2 className="sub-route">Home | Shop</h2>
        <div className="flex sm:flex-row flex-col justify-between w-full items-center h-full">
          <div
            className="
           lg:text-[45px] font-semibold    md:w-[60%]
             lg:w-[45%]

            text-[35px] 
          "
          >
            <h1>
              FreeLanceIT Online <br />
              Book Shop
            </h1>
          </div>

          <img
            src="/assets/images/img_kisspng_bookcas.png"
            alt="book-img"
            className="object-cover sm:w-1/3 w-[50%]"
          />
        </div>
      </div> 
  )
}

export default ShopHeader