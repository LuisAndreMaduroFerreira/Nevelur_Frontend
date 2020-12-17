import React, {useEffect, useState, useContext, Suspense} from 'react';
import {Link} from 'react-router-dom';
import './navbar_component.css'
//what view are we on?
import {AppViewContext} from '../../context/app_view_context/AppViewContext'
//what has been procured and definitely is what the user asked for
import {AppContentContext} from '../../context/app_content_context/AppContentContext'
//what has been so far added to the search bar
import {AppSearchAddendumContext} from '../../context/app_search_addendum_context/AppSearchAddendumContext'
//What is the main suggestion based on levenshtein distance?
import {AppMainSuggestionContext} from '../../context/app_main_search_suggestion_context/AppMainSuggestionContext'
import SearchBar from '../searchbar/SearchBar'
import SuggestionBar from '../suggestionbar/SuggestionBar'
//what are we searching?
import { AppSearchContext } from '../../context/app_search_context/AppSearchContext';

function Navbar(){
    const [view_paradigm, setViewParadigm] = useContext(AppViewContext);
    const [content, setContent] = useContext(AppContentContext);
    const [search_addendum, setSearchAddendum] = useContext(AppSearchAddendumContext);
    const [search_paradigm, setSearchParadigm] = useContext(AppSearchContext);
    const [search_suggestion, setSearchSuggestion] = useState(AppMainSuggestionContext);
    
    const [click, setClick] = useState(false);

    const [button, setButton]  = useState(true);
    //deal with smaller windows
    const showButton = () =>{
        if(window.innerWidth <= 1200)
        {
            setButton(false);
        }
        else
        {
            setButton(true);
        }   
    };

    useEffect(() => {
        showButton();
    }, []);



    window.addEventListener('resize', showButton);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
        <nav className="navbar"> 
            <div className="navbar-container">
                <div className="navbar-logo-container">
                <h2 className="navbar-logo-container-text">f</h2>
                </div>
                <div className="navbar-logo-text-container">
    <h4 className="navbar-logo-text-container">Neverlur</h4>
                </div>
                    <div className="navbar-searchbar-container">        
                        {/* <AppSearchAddendumContext.Provider value={[search_addendum, setSearchAddendum]}>
                        <AppContentContext.Provider value={[content, setContent]}>
                        <AppMainSuggestionContext.Provider value={[search_suggestion, setSearchSuggestion]}>
                        <AppViewContext.Provider value={[view_paradigm, setViewParadigm]}> */}
                        <Suspense fallback={"Loading"}>
                        <SearchBar/>
                        </Suspense>
                        {/* </AppViewContext.Provider>
                        </AppMainSuggestionContext.Provider>
                        </AppContentContext.Provider>
                        </AppSearchAddendumContext.Provider> */}
                    </div>
                    <div className='menu-icon' onClick={handleClick}> 
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={() => setViewParadigm("Services")}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/github' className='nav-links' onClick={()=> window.open("https://github.com/LuisAndreMaduroFerreira", "_blank")}>
                                Github
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/collection' className='nav-links' onClick={() => setViewParadigm("Media")}>
                                Collection
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={() => setViewParadigm("Login")}>
                                Login
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
        </> 
    );
}

export default Navbar;