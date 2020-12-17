import React from 'react';
import { AppMainSuggestionContext } from '../../context/app_main_search_suggestion_context/AppMainSuggestionContext';
import SuggestionCardCompomnent from '../suggestioncard/SuggestionCardComponent'

function SuggestionViewComponent(){
    return (
        <div className="suggestion-card-list-container">
            <SuggestionCardCompomnent/>
        </div>
    )

}

export default SuggestionViewComponent;