import React, { useContext, useState, useEffect } from "react";
import "./ArticlesPage.css";
import AltHeader from "../../components/alt-header/AltHeader";
import Article from "../../components/article/Article";

const ArticlesPage = () => {
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(null);
  const [pages, setPages] = useState(null);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(4);
  const [articlesArray, setArticlesArray] = useState(null);
  const articlesArray2 = [
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
    {
      date: "June 13th, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
    },
  ];
  const lastIndex = articlesArray2.length - 1;


  let pagesArray = [];

  useEffect(() => {
    setPageMax(Math.round(articlesArray2.length / 4));
  }, [articlesArray2]);

  useEffect(() => {
    setIndexStart(page * 4 - 1);
    setIndexEnd(indexStart + 4);
  }, [page, indexStart]);

  useEffect(() => {
    setArticlesArray(articlesArray2.slice(indexStart, indexEnd));
  }, [indexStart, indexEnd]);

  useEffect(() => {
    for (let i = 1; i <= pageMax; i++) {
      pagesArray.push(i);
    }
    console.log(pagesArray);
  }, [pageMax]);

  return (
    <section className="articles_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      {articlesArray2 &&
        articlesArray2.map((a, i) => {
          return <Article a={a}  i={i} lastIndexOf={lastIndex}/>;
        })}
    </section>
  );
};

export default ArticlesPage;
