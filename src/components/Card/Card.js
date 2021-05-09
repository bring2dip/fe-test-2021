import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function dateToYMD(dateObj) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${date <= 9 ? `0${date}` : date} ${month}, ${year}`;
}

export default function Card({
  date, title, description, bgColor,
}) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-0" style={{ backgroundColor: bgColor }}>
        <div className="card-body">
          <div>
            <h6 className="card-date">{dateToYMD(date)}</h6>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-ghost"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
