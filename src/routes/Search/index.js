import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose, withHandlers } from 'recompose';

import styles from './styles';
import Form from './components/Form';
import Loader from 'components/Loader';
import Header from 'components/Header';
import ResultsList from './components/ResultsList'
import {
  searchForLanguage,
  resetSearchResults
} from 'Redux/Actions/SearchActions';

const Search = ({
  showLoader,
  searchTerm,
  searchResults,
  onSearchClick,
  fetchingResults,
  resetSearchResults,
}) => (
  <div>
    <Header title='Language Detector'/>
    <Form
      searchTerm={searchTerm}
      onSubmit={onSearchClick}
      resetForm={resetSearchResults}
    />
    {
      searchResults.length ?
      <ResultsList
        searchResults={searchResults}
      />
      : null
    }
    {
      fetchingResults ?
      <Loader
        size={50}
        color="primary"
      /> :
      null
    }
  </div>  
);

Search.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.array,
  searchForLanguage: PropTypes.func.isRequired,
  resetSearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  search: {
    fetching,
    searchTerm,
    searchResults,
  }
}) => ({
  searchTerm,
  searchResults,
  fetchingResults: fetching,
});

const mapDispatchToProps = {
  searchForLanguage,
  resetSearchResults
};

const enhancer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSearchClick: ({
      searchForLanguage
    }) => text => {
      searchForLanguage(text);
    }
  }),
);

export default enhancer(Search);