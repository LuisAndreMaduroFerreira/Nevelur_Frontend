import React, {useContext} from 'react';
import './SuggestionCardComponent.css';
import {AppViewContext} from '../../context/app_view_context/AppViewContext'


function SuggestionCardCompomnent(){

    const [view_paradigm, setViewParadigm] = useContext(AppViewContext);

    const handleCardClick = () => {
        setViewParadigm("Media");
    }


    return (
        <div className="suggestion-card-container" 
        onClick={handleCardClick}>
            <div className="suggestion-card-content">
                <div className="suggestion-card-image">
                    <img src={require("../../resource/example_album_cover_resource/De-Loused_in_the_Comatorium.jpeg")}></img>
                </div>
                <div className="suggestion-card-text-info">
                     <h2>De-loused in the Comatorium</h2>
                     <h4>The Mars Volta</h4>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCardCompomnent;