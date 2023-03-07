import React, { useState } from "react";
import PropTypes from "prop-types";

function ArticalViewer({ article = {} }) {
  const { name, contents = [] } = article;
  const [activeContentId, setActiveContentId] = useState(() => {
    const { contentId } = contents[0];
    return contentId;
  });

  return (
    <div className="flex justify-between">
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        {contents.map(({ contentId, contentName, contentText }, index) => {
          return (
            contentId === activeContentId && (
              <div>
                <h3 className="text-md font-semibold p-3">
                  {index + 1}. {contentName}
                </h3>
                <p className="text-gray-500">{contentText}</p>
              </div>
            )
          );
        })}
      </div>
      <div className="border-2 p-8">
        <div className="text-sm font-semibold mb-8">Table of Contents:</div>
        {contents.map(({ contentId, contentName }) => {
          const activeClass = contentId === activeContentId ? "text-black" : "";
          return (
            <div className="my-2">
              <button
                key={contentId}
                onClick={() => setActiveContentId(contentId)}
              >
                <span className={`text-gray-400 text-sm py-2 ${activeClass}`}>
                  {contentName}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ArticalViewer.defaultProps = {
  article: {
    name: "Your Privacy Matters",
    contents: [
      {
        contentId: "article-introduction",
        contentName: "Introduction",
        contentText:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
      },
      {
        contentId: "article-data-collect",
        contentName: "Data we collect",
        contentText:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
      },
      {
        contentId: "article-data-use",
        contentName: "How we use your data",
        contentText: "Lorem ipsum",
      },
      {
        contentId: "article-share-information",
        contentName: "How we share information",
        contentText: "Lorem ipsum",
      },
      {
        contentId: "article-choices-obligations",
        contentName: "Your choices and obligations",
        contentText: "Lorem ipsum",
      },
      {
        contentId: "Other-info",
        contentName: "Other imortant information",
        contentText: "Lorem ipsum",
      },
    ],
  },
};

ArticalViewer.prototype = {
  article: PropTypes.shape({}),
};

export default ArticalViewer;
