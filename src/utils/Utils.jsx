export const articlesResponse = [
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
