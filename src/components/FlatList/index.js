import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import FlatListItem from './FlatListItem';

const FlatList = ({
  items,
  classes,
  itemKey,
  primaryTextKey,
}) => (
  <div className={classes.root}>
    <List component="nav">
      <Divider />
      {
        items.map(
          (item, index) => (
            <FlatListItem
              key={item[itemKey]}
              text={`${index + 1}. ${item[primaryTextKey]}`}
            />
          )
        )
      }
      <Divider />
    </List>
  </div>
);

FlatList.defaultProps = {
  items: [],
  primaryTextKey: '',
};

FlatList.propTypes = {
  items: PropTypes.array.isRequired,
  primaryTextKey: PropTypes.string.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(FlatList);
