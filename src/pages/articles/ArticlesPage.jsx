import React, { useContext } from "react";
import "./ArticlesPage.css";
import Header from "../../components/header/Header";
import AltHeader from "../../components/alt-header/AltHeader";
import Article from "../../components/article/Article";

const ArticlesPage = () => {
  const articlesArray = [
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

  return (
    <section className="articles_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      {articlesArray.map((a) => {
        return (
          <>
            <Article a={a} />
          </>
        );
      })}
    </section>
  );
};

export default ArticlesPage;
