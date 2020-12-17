import React, {useContext, useState} from 'react';
import './Sidebar.css';
import {AppViewContext} from '../../context/app_view_context/AppViewContext'
import CollapsibleGroupButton from '../collapsiblebutton/CollapsibleGroupButton'

function Sidebar(){

    const [view_paradigm, setViewParadigm] = useContext(AppViewContext);

    const handleNewPlaylist = () => {
        setViewParadigm("Adding Playlist");
    }

    const [state, setState] = useState({
        playlists:{
            Work: null,
            Training: null,
            RnR: null
        },
        selectedPlaylist:''
    })

    const playlistKeys = Object.keys(state.playlists);

    return (
        <ul className="sidebar-container">
    
        <li className="new-playlist"
        onClick={handleNewPlaylist}>
            <i className="fa fa-plus-circle" />
            <span>New Playlist</span>
          </li>

          <li className="new-group"
        onClick={handleNewPlaylist}>
            <i className="fa fa-plus-circle" />
            <span>New Group</span>
          </li>

          {/* {playlistKeys.map(list => (
            <li
              key={list}
              //if active add active to classname
            className={list === state.currentPlaylist ? 'active' : 'inactive'}
            onClick={() => (
                setState({...state, currentPlaylist: list}))}>
            {list}
            </li>
          ))} */}

        <li><CollapsibleGroupButton groupName={"Working"}/></li>
        <li><CollapsibleGroupButton groupName={"Training"}/></li>
        <li><CollapsibleGroupButton groupName={"RnR"}/></li>
        </ul>
      )
}


export default Sidebar;