import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose, withState, withHandlers } from 'recompose';

import Button from 'components/Button';
import TextInput from 'components/TextInput';

import styles from './styles';

const SearchForm = ({
  classes,
  onSubmit,
  searchText,
  onResetForm,
  setSearchText,
}) => (
  <div className={classes.main}>
    <div className={classes.inputWrapper}>
      <TextInput
        label='Search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>  
    <div className={classes.buttonsWrapper}>
      <Button
        size="small"
        text="Search"
        color="primary"
        variant="outlined"
        buttonClass={classes.searchButton}
        onClick={() => onSubmit(searchText)}
      />
      <Button
        size="small"
        text="Reset"
        color="secondary"
        variant="outlined"
        onClick={onResetForm}
        buttonClass={classes.resetButton}
      />
    </div> 
  </div>  
);

SearchForm.defaultProps = {
  searchTerm: ''
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

const enhancer = compose(
  withStyles(styles),
  withState('searchText', 'setSearchText', ''),
  withHandlers({
    onResetForm: ({
      resetForm,
      setSearchText
    }) => () => {
      resetForm();
      setSearchText('');
    }
  })
);

export default enhancer(SearchForm);