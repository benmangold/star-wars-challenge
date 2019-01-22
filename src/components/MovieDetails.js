import React from 'react';
import {OverlayText} from '../styled-components/OverlayStyles'

import moment from 'moment';
moment().format('dddd MMM Do YYYY');

export default props => {
  if (props.filmDataLoaded) {
    return props.filmData.map((item, index, array) => {
      return (
        <OverlayText key={index}>
          {`${item.title} - ${formatDate(item.release_date)}`}
        </OverlayText>
      );
    });
  } else {
    if (props.error) {
      return (
        <OverlayText>
          This is not the droid you're looking for, incorrect URL
        </OverlayText>
      );
    } else {
      // loading movie data
      return (
        <div>
          <img src='./spinner.svg' />
        </div>
      );
    }
  }
};

function formatDate(date) {
  let formattedDate = moment(date).toString();
  formattedDate = formattedDate.split(' ');
  formattedDate.pop();
  formattedDate.pop();
  formattedDate = formattedDate.join(' ');
  return formattedDate;
};
