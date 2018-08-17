import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const FlatListItem = ({
  text,
}) => (
  <ListItem button>
    <ListItemText primary={text} />
  </ListItem>
);

FlatListItem.propTypes = {
  text: PropTypes.string,
};

export default FlatListItem;