import React, {useContext, useEffect, useState, } from 'react';
import { fetchSuggestionData } from '../../request/fetch_info/axios/axios_fetch_suggestion_data';
import {AppContentContext} from '../../context/app_content_context/AppContentContext';
import { AppMainSuggestionContext } from '../../context/app_main_search_suggestion_context/AppMainSuggestionContext';
import {AppSearchContext} from '../../context/app_search_context/AppSearchContext'
import {AppSearchAddendumContext} from '../../context/app_search_addendum_context/AppSearchAddendumContext'
import {build_api_request_url} from '../../request/build_request_url'
import {AppViewContext} from '../../context/app_view_context/AppViewContext'
import './SearchBar.css';



const axios = require('axios');

function SearchBar() {

    const [content, setContent] = useContext(AppContentContext);
    const [search_paradigm, setSearchParadigm] = useContext(AppSearchContext);
    const [search_suggestion, setSearchSuggestion] = useContext(AppMainSuggestionContext);
    const [search_addendum, setSearchAddendum] = useContext(AppSearchAddendumContext);
    const [view_paradigm, setViewParadigm] = useState(AppViewContext);


    const updateContexts = async (event) => {
      if (event.target.value.length > 3){
        const url = build_api_request_url("neverlur_backend_api", "suggestions/"+search_paradigm, event.target.value)
        //const response = await fetchSuggestionData(url);
        const response = await axios.get(url).then(function(response)
        {
          console.log(response.data);
          setSearchSuggestion(JSON.stringify(response.data));
        });
      }

     }
 
     const handleEnterKeyDown = async (event) => {
      setSearchAddendum(event.target.value);
      setViewParadigm("Suggestion");
      if (event.key === 'Enter') {
             console.log("enter for http://localhost:8000/api/"+search_paradigm+"/"+search_addendum);
             setContent("PRESSED WORKING");
             //async get queues
         }

     }

    return (
      <input
      className = "searchbar-element"
      onChange = {updateContexts}
      placeholder={"Procure " + search_paradigm + " in Neverlur"}
      onKeyUp={handleEnterKeyDown} />
    );
  }

export default SearchBar;