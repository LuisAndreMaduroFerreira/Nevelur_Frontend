import React, { Suspense, useState } from 'react';
import './App.css';
import SongCard from './component/songcard/song_card_component.js'
import { fetchSuggestionData } from './request/fetch_info/suspense/fetch_suggestion_data'
import {build_api_request_url} from './request/build_request_url'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/navbar/navbar_component'
import ToggleSwitchBar from './component/toggleswitchbar/toggleswitchbar_component'
import ContentPaneContainer from './component/contentpanecontainer/content_pane_container'
import {AppSearchContext} from './context/app_search_context/AppSearchContext'
import {AppViewContext} from './context/app_view_context/AppViewContext'
import {AppContentContext} from './context/app_content_context/AppContentContext'
import {AppSearchAddendumContext} from './context/app_search_addendum_context/AppSearchAddendumContext'
import {AppMainSuggestionContext} from './context/app_main_search_suggestion_context/AppMainSuggestionContext'
import {AppSelectedMediaContext} from './context/app_selected_media/AppSelectedMediaContext'

//const resource = fetchGenreData();
const axios = require('axios');

function App (){

  const [search_paradigm, setSearchParadigm] = useState("albums");
  const [view_paradigm, setViewParadigm] = useState("Suggestion");
  const [search_addendum, setSearchAddendum] = useState("");
  const [search_suggestion, setSearchSuggestion] = useState("");
  const [selection, setSelection] = useState(0);

  //get a default search first view
  // const [content, setContent] = useState([{"songname":"Take the Veil", "duration":"8:42"}, 
  //                                         {"songname":"Eriatarka", "duration":"6:20"}]);
  const [content, setContent] = useState('[{"id": 1,"name": "black metal","date_added": "2020-09-16T17:32:23.773707Z"}{"id": 2,"name": "melodic death metal","date_added": "2020-09-16T17:32:29.224017Z"}]');

  return (
    <>
    <Router>
      <div>
      <AppSearchContext.Provider value={[search_paradigm, setSearchParadigm]}>
      <AppContentContext.Provider value={[content, setContent]}>
      <AppViewContext.Provider value={[view_paradigm, setViewParadigm]}>
      <AppSearchAddendumContext.Provider value={[search_addendum, setSearchAddendum]}>
      <AppMainSuggestionContext.Provider value={[search_suggestion, setSearchSuggestion]}>
      <Navbar/>
      </AppMainSuggestionContext.Provider>
      </AppSearchAddendumContext.Provider>
      </AppViewContext.Provider>
      </AppContentContext.Provider>
      </AppSearchContext.Provider>
      <Switch>
        <Route path='/' exact />
      </Switch>
      </div>
      <div>
      {/* {<h2>CURRENT SEARCH STATE: http://localhost:8000/api/{search_paradigm}/{search_addendum} </h2>*/}
      {/* {0<h2>CURRENT CONTENT VIEW STATE: {view_paradigm} </h2>} */}
       {/* {<h02>CURRENT CONTENT STATE: {content} </h2>} */}
       {/* {<h2>CURRENT SEARCHBAR ADDENDUM: {search_addendum}</h2>}
      {<h2>CURRENT SUGGESTIONS : {search_suggestion}</h2>} */}
      <AppSearchContext.Provider value={[search_paradigm, setSearchParadigm]}> 
        <ToggleSwitchBar/>
      </AppSearchContext.Provider></div>
    </Router>
    <AppSelectedMediaContext.Provider value={[selection, setSelection]}>
    <AppContentContext.Provider value={[content, setContent]}>
    <AppViewContext.Provider value={[view_paradigm, setViewParadigm]}>
    <div className="ContentPane"> 
      <ContentPaneContainer/>
    </div>
    </AppViewContext.Provider>
    </AppContentContext.Provider>
    </AppSelectedMediaContext.Provider>
    

    </> 
  );

}

    /* { <Suspense fallback={<h1>Loading Song Card</h1>}> } */
      /* { <SongCardPad /> } */
    /* { </Suspense> } */

export default App;
