import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import FlatList from 'components/FlatList';

const ResultsList = ({
  classes,
  searchResults,
}) => (
  <div className={classes.listWrapper}>
    <FlatList
      items={searchResults}
      itemKey="language_code"
      primaryTextKey="language_name"
    />
  </div>  
);

ResultsList.defaultProps = {
  searchResults: [],
};

ResultsList.propTypes = {
  classes: PropTypes.object.isRequired,
  searchResults: PropTypes.array.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(ResultsList);