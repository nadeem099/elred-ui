import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import forOwn from "lodash/forOwn";

function CommonCard({
  id,
  name,
  displayAllContacts,
  cardContent,
  iconHeading,
}) {

  const constructCardBody = () => {
    // if body is string
    if (typeof cardContent === "string") {
      return cardContent;
    }

    // if body is array of strings
    // some return true if any element matches the condition so it has to be reversed(!)
    if (
      Array.isArray(cardContent) &&
      !cardContent.some((v) => typeof v !== "string")
    ) {
      const final = [
        <p>{cardContent[0]}</p>,
        displayAllContacts ? <p>{cardContent.slice(1)}</p> : "",
      ];
      return final;
    }

    // if body is object with every property value as string
    if (
      typeof cardContent === "object" &&
      !Array.isArray(cardContent) &&
      cardContent !== null
    ) {
      let finalValue = "";
      forOwn(cardContent, (value) => {
        finalValue += `${value}, `;
      });
      return finalValue;
    }

    // if body is array of objects and every property value as string
    // property value is not checked for string
    if (Array.isArray(cardContent)) {
      return (
        <div className="flex">
          {cardContent.map((obj) => {
            if (obj.iconName) {
              const iconType = ["instagram", "facebook", "twitter"].includes(
                obj.id
              )
                ? "fa-brands"
                : "fas";
              return (
                <div className="text-center px-4">
                  <a key={obj.id} href={obj.link}>
                    <FontAwesomeIcon
                      icon={[`${iconType}`, `${obj.iconName}`]}
                      className="text-gray-400 text-3xl"
                    />
                    <p className="text-xs">{obj.id}</p>
                  </a>
                </div>
              );
            }
          })}
        </div>
      );
    }
  };

  return (
    <div>
      {/* card title */}
      <div>
        <span className="pr-2">
          <FontAwesomeIcon
            icon={["fas", `${iconHeading}`]}
            color="lightgray"
            size="lg"
          />
        </span>
        <span className="text-xl [font-weight:600]">{name}</span>
      </div>
      {/* card inner details */}
      <div className="mt-8">{constructCardBody()}</div>
    </div>
  );
}

export default CommonCard;
