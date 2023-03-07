import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ContactCard(props) {
  const {
    cardContent: { contactLines = [], emailIcon, phoneIcon } = {},
    name,
    iconHeading,
    displayAllContacts = false,
  } = props;
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
      <div className="mt-8">
        {contactLines.map((contact, index) => {
          const { lineId, lineEmails, linePhones } = contact;
          return (
            (index === 1 || displayAllContacts) && (
              <div key={lineId} className="mt-4">
                <div>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", `${emailIcon}`]}
                      color="lightgray"
                      size="sm"
                    />
                  </span>
                  <span>
                    {lineEmails.map((email, i) =>
                      i == 0 ? <Fragment>{email} / </Fragment> : email
                    )}
                  </span>
                </div>
                <div>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", `${phoneIcon}`]}
                      color="lightgray"
                      size="sm"
                    />
                  </span>
                  <span>
                    {linePhones.map((phone, i) =>
                      i == 0 ? <Fragment>{phone} / </Fragment> : phone
                    )}
                  </span>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

ContactCard.prototype = {
  cardContent: PropTypes.shape({}),
  displayAllContacts: PropTypes.bool,
};

export default ContactCard;
