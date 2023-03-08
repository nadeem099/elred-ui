import React, { useState } from "react";
import PropTypes from "prop-types";
import reduce from "lodash/reduce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactCard from "./ContactCard";
import CommonCard from "./CommonCard";
import SidePopup from "../SidePopup";
import Backdrop from "./Backdrop";

function AboutUsInfo(props) {
  const { infoCards } = props;
  const [displayFullCardContent, setFullCardContent] = useState(() => {
    return reduce(
      infoCards,
      (init, item) => {
        if (item.plusBtn) init[item.id] = false;
        return init;
      },
      {}
    );
  });
  const [showSidePopup, setShowSidePopup] = useState(false);
  const [popUpData, setPopupData] = useState({});

  const handleEditClick = (id) => {
    setShowSidePopup(true);
    setPopupData({ id });
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {infoCards.map(
        (
          { id, name, plusBtn, cardContent, iconHeading, cardItemsCount },
          index
        ) => {
          return (
            <div
              key={id}
              className="flex justify-between border-2 rounded-lg p-3 basis-[22rem]"
            >
              {id === "card-contact" ? (
                <ContactCard
                  id={id}
                  name={name}
                  displayAllContacts={displayFullCardContent[id]}
                  cardContent={cardContent}
                  iconHeading={iconHeading}
                />
              ) : (
                <CommonCard
                  id={id}
                  name={name}
                  displayAllContacts={displayFullCardContent[id]}
                  cardContent={cardContent}
                  iconHeading={iconHeading}
                />
              )}
              <div>
                <div>
                  <button
                    className="text-red-500 ml-1"
                    onClick={() => handleEditClick(id)}
                  >
                    <FontAwesomeIcon icon={["fas", "pen"]} />
                  </button>
                </div>
                <>
                  {index === 0 && (
                    <>
                      {showSidePopup && (
                        <Backdrop
                          showBackDrop={showSidePopup}
                          hideBackDropAndModal={() => setShowSidePopup(false)}
                        />
                      )}
                      <SidePopup popUpData={popUpData} isOpen={showSidePopup} />
                    </>
                  )}
                </>
                {plusBtn && (
                  <button
                    onClick={() =>
                      setFullCardContent((prev) => ({
                        ...prev,
                        [id]: !prev[id],
                      }))
                    }
                  >
                    <div className="border rounded-full mt-12 p-1 bg-red-100 text-red-500 text-xs">
                      + {cardItemsCount}
                    </div>
                  </button>
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

AboutUsInfo.defaultProps = {
  infoCards: [
    {
      id: "card-contact",
      name: "Contact",
      plusBtn: true,
      iconHeading: "address-book",
      cardItemsCount: 3,
      cardContent: {
        emailIcon: "envelope",
        phoneIcon: "phone",
        contactLines: [
          {
            lineId: "contact-line-1",
            lineName: "Sales Team",
            lineEmails: ["salesteam@br.in", "salesteam2@br.in"],
            linePhones: ["+918511591740", "8000058214"],
          },
          {
            lineId: "contact-line-2",
            lineName: "Marketing Team",
            lineEmails: ["salesteam@br.in", "salesteam2@br.in"],
            linePhones: ["+918511591740", "8000058214"],
          },
          {
            lineId: "contact-line-3",
            lineName: "Marketing Team",
            lineEmails: ["salesteam@br.in", "salesteam2@br.in"],
            linePhones: ["+918511591740", "8000058214"],
          },
        ],
      },
    },
    {
      id: "card-address",
      name: "Address",
      iconHeading: "address-book",
      cardContent: {
        addressLine1: "C-1",
        addressLine2: "351 / 4",
        addressLine3: "GIDC Makarpura",
        addressLine4: "Vadodra",
        addressLine5: "Gujrat",
        addressLine6: "India",
      },
    },
    {
      id: "card-hours-of-operations",
      name: "Hours of operations",
      iconHeading: "address-book",
      cardContent: "Monday To Friday - 9:00 Am to 06:00 Pm",
    },
    {
      id: "card-social-media-links",
      name: "Social Media & Links",
      iconHeading: "address-book",
      cardContent: [
        {
          id: "website",
          link: "",
          iconName: "globe",
        },
        {
          id: "instagram",
          link: "",
          iconName: "instagram",
        },
        {
          id: "facebook",
          link: "",
          iconName: "facebook",
        },
        {
          id: "twitter",
          link: "",
          iconName: "twitter",
        },
      ],
    },
    {
      id: "card-statement",
      name: "Statement",
      iconHeading: "address-book",
      plusBtn: true,
      cardItemsCount: 2,
      cardContent: [
        "You think it we ink it.",
        "We ink it even before you think it.",
      ],
    },
  ],
};

AboutUsInfo.prototype = {
  infoCards: PropTypes.array,
};

export default AboutUsInfo;

// user story1: when I click edit button it should open sidebar popup
// user story2: when sidebar popup opens it should i have form depending on where it was clicked
// from

// user story1:
// create a state, event handler, on click set the state,
