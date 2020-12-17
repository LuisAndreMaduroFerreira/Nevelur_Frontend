import React, { Component } from 'react'
import './content_pane_container.css'
import CardView from '../cardview/cardview_component'
import ListView from '../listview/listview_component'
import BackgroundComponent from '../background/background'
import SuggestionViewComponent from '../suggestionview/SuggestionViewComponent'
import Sidebar from '../sidebar/Sidebar.js'

function RenderedContentView(props){
    if(props.suggestionView == true){
        return <CardView/>;
    }
    else{
        return <ListView/>;
    }
}

function ContentPaneContainer(){

// if search_suggestion is not empty, parse it to different
// suggestioncards, with paradigm as a prop

  return (      
  <>
    <div className="background-container">
      {<BackgroundComponent/>}
    </div>
    <div className="content-pane-container">
      {<SuggestionViewComponent/>}
    </div>
    <div className="sidebar-pane-container">
      {<Sidebar/>}
    </div>
  </>
    )
}

export default ContentPaneContainer;