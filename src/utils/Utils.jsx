export const articlesResponse = [
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
  },

  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://static.standard.co.uk/2021/06/07/12/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
  },
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  },
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
  },
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
  },
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
  },
  {
    date: "June 13th, 2022",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    img: "https://anoukmeetsfashion.com/wp-content/uploads/2021/04/conscious-design-VsI_74zRzAo-unsplash-scaled.jpg",
  },
];

export const truncateText = (text, maxLen) => {
  let truncatedText;
  const separator = " ";

  if (text.length <= maxLen) {
    truncatedText = text;
  } else {
    let formatedText = text.substr(0, text.lastIndexOf(separator, maxLen));
    if (formatedText.charAt(formatedText.length - 1) === ",") {
      formatedText = formatedText.substring(0, formatedText.length - 1);
    }
    truncatedText = formatedText + "...";
  }
  return truncatedText;
};
export const Camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
