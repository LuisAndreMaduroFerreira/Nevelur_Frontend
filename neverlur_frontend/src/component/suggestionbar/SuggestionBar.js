import React, {useContext, useEffect, useState} from 'react';
import Autosuggest from 'react-autosuggest';
import {AppContentContext} from '../../context/app_content_context/AppContentContext';
import { AppMainSuggestionContext } from '../../context/app_main_search_suggestion_context/AppMainSuggestionContext';
import {AppSearchContext} from '../../context/app_search_context/AppSearchContext'
import {AppSearchAddendumContext} from '../../context/app_search_addendum_context/AppSearchAddendumContext'
import {build_api_request_url} from '../../request/build_request_url'
import './SuggestionBar.css'


/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span> <i class="fa fa-search"></i> {suggestion.name}</span>
  );
}

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

const axios = require('axios');


class SuggestionBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      loading: false,
      list_size: 0
    };
    
  }

  static contextType = AppSearchContext;
  
  
  async loadSuggestions(value) {
    this.setState({loading:true})
    const search_paradigm = this.context;
    console.log("Searching " + value);
    const url = build_api_request_url("neverlur_backend_api", "suggestions/"+search_paradigm[0], value.toLowerCase())
    const request = await axios.get(url).then(result => {
      console.log(result.data.length)
      this.setState({
        suggestions: result.data,
        loading: false,
        list_size: result.data.length
      })
      console.log("suggestions: " + result.data.map(suggestion => suggestion.name));
    }).catch(error => {
      console.log("FETCHING SUGGESTIONS ERROR:" + error);
      this.setState({
        loading:false
      });
    })
      
    }

  onChange = (event, { newValue }) => {
    this.setState({
      value: capitalize(newValue)
    });
    console.log(newValue)
    const search_paradigm = this.context
    console.log("Would search for " + search_paradigm[0])
  };
    
  onSuggestionsFetchRequested = ({ value }) => {
    if(value.length > 3){
    this.loadSuggestions(value);
  }
    console.log('Loading');
    console.log(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
    console.log('Clearing')
  };

  render() {
    const search_paradigm = this.context
    const { value, suggestions, list_size } = this.state;
    const inputProps = {
      placeholder: "Procure "+search_paradigm[0]+ " in Neverlur",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default SuggestionBar;