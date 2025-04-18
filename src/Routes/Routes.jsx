import React from 'react';

import {
    createBrowserRouter
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
  
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path: '/',
            loader: () => fetch("booksData.json"),
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
          path: 'readlist',
          loader: () => fetch("booksData.json"),
          Component: ReadList
        },
        {
            path: '/bookdetails/:id',
            Component: BookDetails,
            loader: () => fetch("booksData.json")
        }
      ]
    },
  ]);