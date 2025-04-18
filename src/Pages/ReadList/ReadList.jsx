import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const [readlist, setReadlist] = useState([]);

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storeBookData = getStoreBook();
    const convertedStoreBook = storeBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoreBook.includes(book.bookId)
    );
    setReadlist(myReadList);
  }, []);

  const [sort , setSort] = useState("");

  const handleSort = (type) => {
      setSort(type);

      if(type === 'pages')
      {
        const sortByPages = [...readlist].sort((a,b) => a.totalPages - b.totalPages);

        setReadlist(sortByPages);
      }
      if(type === 'ratings')
      {
        const sortByRatings = [...readlist].sort((a,b) => b.rating - a.rating);
        setReadlist(sortByRatings);
      }
  }

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort('pages')}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort('ratings')}>Ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read : {readlist.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readlist.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
