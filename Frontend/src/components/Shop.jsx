import { RatingBar } from "@/shared/RatingBar";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SelectBox } from "@/shared/SelectBox";
import Footer from "./Footer";
import PopularBookCard from "./PopularBookCard";
import BookCard from "./BookCard";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce";
const dropDownOptions = [
  { label: "Latest", value: "latest" },
  { label: "Alphabetical", value: "alphabetical" },
  { label: "Price: Low to High", value: "priceLowToHigh" },
  { label: "Price: High to Low", value: "priceHighToLow" },
];
function Shop() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const debouncedSearchBarValue = useDebounce(searchBarValue, 500);
  const [showBook, setShowBook] = useState(false);
  const location = useLocation();
  const [filter, setFilter] = useState("");
  const params = new URLSearchParams(location.search);
  const categoryName = params.get("category");
  const allBooks = "All Books";
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const [dropDownFilter, setDropDownFilter] = useState([]);
  const fetchBooks = async (allBooks) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_URI}/api/v1/admin/getbooks-basedon-category?categoryName=${allBooks}`
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

  const filteredBooks =
    debouncedSearchBarValue?.length > 0 &&
    booksByCategory?.length > 0 &&
    booksByCategory?.flatMap((categoryGroup) =>
      categoryGroup.shops.filter((book) =>
        book.bookName.toLowerCase().includes(searchBarValue.toLowerCase())
      )
    );

  let images = [
    "/assets/images/img_image_240x230.png",
    "/assets/images/img_image_5.png",
    "/assets/images/img_image_6.png",
    "/assets/images/img_image_7.png",
    "/assets/images/img_image_8.png",
    "/assets/images/img_image_9.png",
    "/assets/images/img_image_5.png",
    "/assets/images/img_image_240x230.png",
    "/assets/images/img_image_8.png",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    setCurrentPage(1); // Reset the index if booksByCategory changes
  }, [categoryName]);

  useEffect(() => {
    if (booksByCategory && filter) {
      const flattenedBooks = booksByCategory.flatMap(
        (categoryGroup) => categoryGroup.shops
      );
      const sorted = [...flattenedBooks].sort((a, b) => {
        if (filter === "latest") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (filter === "alphabetical") {
          return a.bookName.localeCompare(b.bookName);
        } else if (filter === "priceLowToHigh") {
          return a.bookPrice - b.bookPrice;
        } else if (filter === "priceHighToLow") {
          return b.bookPrice - a.bookPrice;
        }
        return 0;
      });
      setDropDownFilter(sorted);
    }
  }, [filter, booksByCategory]);
  console.log("filter babu", filter);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  let displayedBooks = [];
  let currentCount = 0;
  if (
    debouncedSearchBarValue.length == 0 &&
    filter.length == 0 &&
    booksByCategory?.length > 0
  ) {
    for (const categoryGroup of booksByCategory) {
      for (const book of categoryGroup.shops) {
        if (currentCount >= startIndex && currentCount < endIndex) {
          displayedBooks.push(book);
        }
        currentCount++;
      }
    }
  } else if (filter.length > 0 && !debouncedSearchBarValue) {
    for (const course of dropDownFilter) {
      if (currentCount >= startIndex && currentCount < endIndex) {
        displayedBooks.push(course);
      }
      currentCount++;
    }
  } else if (debouncedSearchBarValue.length > 0 && filteredBooks.length > 0) {
    for (const book of filteredBooks) {
      if (currentCount >= startIndex && currentCount < endIndex) {
        displayedBooks.push(book);
      }
      currentCount++;
    }
  } else {
    const filteredBook = dropDownFilter?.filter((book) =>
      book.bookName.toLowerCase().includes(searchBarValue.toLowerCase())
    );
    for (const course of filteredBook) {
      if (currentCount >= startIndex && currentCount < endIndex) {
        displayedBooks.push(course);
      }
      currentCount++;
    }
  }

  const totalCards =
    debouncedSearchBarValue.length === 0
      ? booksByCategory?.length > 0 &&
        booksByCategory?.reduce(
          (acc, categoryGroup) => acc + categoryGroup.shops.length,
          0
        )
      : filteredBooks.length;

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const handleViewLess = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleViewMore = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(totalCards / cardsPerPage))
    );
  };

  console.log("books  data from shops", booksByCategory);
  if (isLoading) return <p className="mx-12">Loading...</p>;
  if (error)
    return (
      <p className="mx-12">Error loading books from shops: {error.message}</p>
    );

  const renderBooks = () => {
    let currentIndex = index;

    return (
      <div className="flex flex-col items-center justify-between min-h-[1100px] w-[100%]  gap-10">
        {/* <div className="flex flex-col items-center justify-start w-full gap-[30px]"> */}
        <div className="justify-center w-full  gap-[15px] lg:px-4 sm:px-8 px-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid">
          {displayedBooks.length > 0 ? (
            displayedBooks?.map((bookByCategory) =>
              // categoryGroup?.shops?.map((bookByCategory)=>
              {
                const image = images[currentIndex % images.length];
                currentIndex += 1;
                return (
                  <BookCard
                    key={bookByCategory._id}
                    img={image}
                    bookName={bookByCategory.bookName}
                    bookPrice={bookByCategory.bookPrice}
                  />
                );
              }
            )
          ) : (
            <p className="text-[20px]">No results found for {searchBarValue}</p>
          )}
        </div>
        {/* </div> */}

        <div className="flex flex-row gap-0 justify-between items-center md:w-[45%] w-[80%]">
          <button
            onClick={handleViewLess}
            disabled={currentPage === 1}
            className="w-[15%]  h-[40px] px-3.5 rounded-[5px] bg-white"
          >
            <img src="/assets/icons/img_arrow_left.svg" alt="left-arrow" />
          </button>
          <p className="!text-gray-900 !font-medium text-base leading-5">
            Page
          </p>
          <button className="!text-gray-700 font-medium min-w-[42px] h-[36px] px-[15px] text-lg rounded-lg bg-white">
            {currentPage}
          </button>
          <p className="!text-gray-900 !font-medium text-base leading-5 ">
            of &nbsp; {totalPages}
          </p>
          <button
            onClick={handleViewMore}
            disabled={currentPage === totalPages}
            className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-red-300 hover:bg-red-400"
          >
            <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" />
          </button>
        </div>
      </div>

      // {/* </div> */}
    );
  };
  return (
    <div className="flex flex-col  w-full gap-[50px] bg-gray-100 ">
      <div className="flex flex-col  justify-start items-start gap-10 ">
        <div className="flex flex-row items-center justify-start w-[100%] overflow-x-auto gap-4 px-6">
          <Link to="/shop/category?category=All Books">
            <button
              className={`text-black ${
                !categoryName || categoryName === `All Books`
                  ? `bg-orange-400 text-white`
                  : `bg-white`
              } py-2 px-0  lg:px-10 font-medium min-w-[150px] rounded-[10px] `}
            >
              All Books
            </button>
          </Link>
          <Link to="/shop/category?category=Programming">
            <button
              className={`text-black ${
                categoryName === `Programming`
                  ? `bg-orange-400 text-white`
                  : `bg-white`
              }  py-2 px-0  lg:px-10 font-medium min-w-[150px] rounded-[10px]`}
            >
              Programming
            </button>
          </Link>
          <Link to="/shop/category?category=School">
            <button
              className={`text-black ${
                categoryName === `School`
                  ? `bg-orange-400 text-white`
                  : `bg-white`
              } py-2 px-0  lg:px-0 font-medium min-w-[150px] rounded-[10px]`}
            >
              School
            </button>
          </Link>
          <Link to="/shop/category?category=Computer Science">
            <button
              className={`text-black ${
                categoryName === `Computer Science`
                  ? `bg-orange-400 text-white`
                  : `bg-white`
              } py-2 px-0   lg:px-6 font-medium min-w-[150px] rounded-[10px]`}
            >
              Computer Science
            </button>
          </Link>
          {/* </div> */}
        </div>

        {!categoryName && (
          <div className="flex md:flex-row  flex-col justify-start w-full gap-[15px] sm:gap-5 ">
            <div className="relative lg:w-[70%] mx-4 md:w-[60%] gap-[35px]  ">
              <Input
                name="search"
                placeholder="Search Class, Course, Book Name"
                value={searchBarValue}
                // onChange={(option) => setSearchBarValue4(option.value)}
                onChange={(e) => setSearchBarValue(e.target.value)}
                type="text"
                className="text-gray-700 rounded-tr-[10px] rounded-br-[10px] font-medium h-12"
              />
              <div className="bg-orange-600 w-7 h-7 absolute top-[10px] right-3  rounded-sm">
                <img
                  src="/assets/icons/img_search.svg"
                  alt="search"
                  className="m-[6px] w-4 h-4 pointer-events-none "
                />
              </div>
            </div>

            <SelectBox
              shape="round"
              indicator={
                <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
              }
              name="sortbylatest"
              placeholder="Sort by: Latest"
              options={dropDownOptions}
              onChange={(option) => setFilter(option.value)}
              className="lg:w-[30%] md:w-[40%] mx-4 font-medium  bg-white "
            />
          </div>
        )}
      </div>

      {/* <div> */}
      {
        !categoryName && (
          // <div>
          // <div className="justify-center w-full gap-[15px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid">
          //     <BookCard img={"/assets/images/img_image_240x230.png"} />
          //     <BookCard img={"/assets/images/img_image_5.png"} />
          //     <BookCard img={"/assets/images/img_image_6.png"} />
          //     <BookCard img={"/assets/images/img_image_7.png"} />
          //     <BookCard img={"/assets/images/img_image_8.png"} />
          //     <BookCard img={"/assets/images/img_image_9.png"} />
          //     <BookCard img={"/assets/images/img_image_5.png"} />
          //     <BookCard img={"/assets/images/img_image_240x230.png"} />
          //     <BookCard img={"/assets/images/img_image_8.png"} />
          //   </div>
          // <div className="flex flex-row gap-0 justify-between items-center md:w-[45%] w-[80%]">
          //   <button className="w-[15%]  h-[40px] px-3.5 rounded-[5px] bg-white">
          //     <img src="/assets/icons/img_arrow_left.svg" alt="left-arrow" />
          //   </button>
          //   <p className="!text-gray-900 !font-medium text-base leading-5">
          //     Page
          //   </p>
          //   <button className="!text-gray-700 font-medium min-w-[42px] h-[36px] px-[15px] text-lg rounded-lg bg-white">
          //     5
          //   </button>
          //   <p className="!text-gray-900 !font-medium text-base leading-5 ">
          //     of 80
          //   </p>
          //   <button className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-red-300">
          //     <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" />
          //   </button>
          // </div>
          // </div>
          // <div>
          <div>{renderBooks()}</div>
        )
        // </div>
      }
    </div>
  );
}

export default Shop;
