import React, {useContext} from 'react';
import './toggleswitchbar_component.css'
import { AppSearchContext } from '../../context/app_search_context/AppSearchContext';


function ToggleSwitchBar(){
    const [search_paradigm, setSearchParadigm] = useContext(AppSearchContext);
    return (
        <>
        <nav className="toggleswitchbar"> 
            <div className="toggleswitchbar-container">
        <ul>
        <li><button className="togglebar-item"
        onClick={() => setSearchParadigm("albums")}>
        Album
      </button></li>
      <li><button className="togglebar-item"
      onClick={() => setSearchParadigm("artists")}>
        Artist
      </button></li>
      <li><button className="togglebar-item"
      onClick={() => setSearchParadigm("genres")}>
        Genre
      </button></li>
      <li><button className="togglebar-item"
      onClick={() => setSearchParadigm("songs")}>
        Song
      </button></li>
      </ul>
    </div>
        </nav>
        </> 
    );
}



export default ToggleSwitchBar;