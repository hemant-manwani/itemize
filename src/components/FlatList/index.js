import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import styles form './styles';

const FlatList = ({
  items,
  selectedItem,
  primaryTextKey,
}) => (
  <div className={classes.root}>
    <List component="nav">
      {
        items.map(
          item => (
            <FlatListItem
              text={item[primaryTextKey]}
            />
          )
        )
      }
    </List>
  </div>
);

FlatList.defaultProps = {
  items: [],
  selectedItem: {},
  primaryTextKey: ''
};

FlatList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  primaryTextKey: PropTypes.string.isRequired
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(FlatList);