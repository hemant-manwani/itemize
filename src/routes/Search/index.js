import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Header from 'components/Header';

const Search = () => (
  <Header title='Detect language'/>
);

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(Search);