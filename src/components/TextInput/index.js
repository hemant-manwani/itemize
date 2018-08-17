import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const TextInput = ({
  label,
  value,
  classes,
  onChange
}) => (
  <TextField
    label={label}
    value={value}
    margin="normal"
    onChange={onChange}
    className={classes.textField}
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(TextInput);