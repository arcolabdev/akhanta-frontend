import HTMLReactParser from "html-react-parser";

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
  return HTMLReactParser(truncatedText);
};

export const Camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
