import React, { useEffect, useState } from 'react'
import PopularBookCard from './PopularBookCard'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function ShopSideBar() {

    const allBooks = "All Books";
    const fetchBooks = async (allBooks) => {
      const { data } = await axios.get(
        `/api/v1/admin/getbooks-basedon-category?categoryName=${allBooks}`
      );
      return data.data.shops; // Return the data from the API response
    };
  
    const {
      data: booksByCategory,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["shops", allBooks], // Use categoryName in queryKey
      queryFn: () => fetchBooks(allBooks),
      enabled: !!allBooks,
      // Ensure the query runs only if categoryName exists
    });
    const [rowsToShow1, setRowsToShow1] = useState(1);
    const [rowsToShow2, setRowsToShow2] = useState(1);
    let images1=[
        "/assets/images/img_image_14.png",
        "/assets/images/img_image_90x75.png",
        "/assets/images/img_image_4.png"
    ]
    let images2=["/assets/images/img_image_240x230.png","/assets/images/img_image_5.png","/assets/images/img_image_6.png","/assets/images/img_image_7.png","/assets/images/img_image_8.png","/assets/images/img_image_9.png","/assets/images/img_image_5.png","/assets/images/img_image_240x230.png","/assets/images/img_image_8.png"];
    const [index1,setIndex1]=useState(0);
    const [index2,setIndex2]=useState(0);
    useEffect(() => {
        setRowsToShow1(1);
        setRowsToShow2(1)
        setIndex1(0);
        setIndex2(0);
      }, []);
    
      const handleViewMore1 = () => {
        setRowsToShow1(rowsToShow1 + 1);
      };
      const handleViewMore2 = () => {
        setRowsToShow2(rowsToShow2 + 1);
      };

  let displayedBooks = [];
//   let currentCount = 0;
if(booksByCategory?.length>0)
  for (const categoryGroup of booksByCategory) {
      for (const book of categoryGroup.shops) {
        // if (currentCount >= startIndex && currentCount < endIndex) {
          displayedBooks.push(book);
        // }
        // currentCount++;
      }
    }
   const renderBooks=()=>{
      let currentIndex1=index1;
      let currentIndex2=index2;
     return (
    <div className="flex flex-col w-[100%] gap-[39px] ml-10">

    <div className="flex flex-col items-start justify-start pt-0.5 gap-3.5 ">
      <h2 className="text-3xl font-semibold">Popular Books</h2>
      <div className={`max-h-[600px] flex flex-col w-full gap-[15px] ${rowsToShow1>1?`overflow-y-scroll`:``} `}>
        
       
          <div className="flex flex-col gap-[15px]">
              {displayedBooks?.length > 0 && displayedBooks?.slice(0, rowsToShow1 * 3).map((book) => {
          let image = images1[currentIndex1 % images1.length];
          currentIndex1 += 1;
          return (
            <div key={book._id}>
              <PopularBookCard
                text1={book.bookName}
                text2={book.bookWriter.slice(0, 20)}
                price={book.bookPrice}
                img={image}
              />
            </div>
          );
        })}
              {rowsToShow1 * 3 <  displayedBooks?.length && (
                <div className="flex justify-end mb-4">
                <button
                  onClick={handleViewMore1}
                  className=" text-xl font-medium leading-5 text-orange-500 py-2 px-4 rounded"
                >
                  See More
                </button>
                </div>
              )}
          </div> 
      </div>
    </div>


    <div className= {`max-h-[620px] flex flex-col w-full gap-[15px] ${rowsToShow2>1?`overflow-y-scroll`:``} `}>
      <h2 className="text-3xl font-semibold"> New Arrivals</h2>

      <div className="flex flex-col gap-[15px]">
         {/* {displayedBooks?.length>0 && displayedBooks?.slice(0,rowsToShow2*3).map((book) => 
         {
            let image = images1[currentIndex % images1.length];
            currentIndex += 1;
          
              <div key={book._id}>
                  <PopularBookCard
          text1={book.bookName}
          text2={book.bookWriter.slice(0,20)}
          price={book.bookPrice}
          img={"/assets/images/img_image_14.png"}
        />
              </div>)} */}
               {displayedBooks?.length > 0 && displayedBooks?.slice(0, rowsToShow2 * 3).map((book) => {
          let image = images2[currentIndex2 % images2.length];
          currentIndex2 += 1;
          return (
            <div key={book._id}>
              <PopularBookCard
                text1={book.bookName}
                text2={book.bookWriter.slice(0, 20)}
                price={book.bookPrice}
                img={image}
              />
            </div>
          );
        })}
              {rowsToShow2 * 3 <  displayedBooks?.length && (
                <div className="flex justify-end mb-4">
                <button
                  onClick={handleViewMore2}
                  className=" text-xl font-medium leading-5 text-orange-500 py-2 px-4 rounded"
                >
                  See More
                </button>
                </div>
              )}
      </div> 
    </div>
  </div>
  );
}
return (
    <div>
      {renderBooks()}
    </div>
  );
}

export default ShopSideBar