import React from 'react';
import {AppContentContext} from '../../context/app_content_context/AppContentContext';
import {AppSearchContext} from '../../context/app_search_context/AppSearchContext'
import {AppViewContext} from '../../context/app_view_context/AppViewContext'
import ContentPaneContainer from '../contentpanecontainer/content_pane_container';
import {AppSearchAddendumContext} from '../../context/app_search_addendum_context/AppSearchAddendumContext'


function ContentView() {

    const [search_paradigm, setSearchParadigm] = useContext(AppSearchContext);
    const [search_addendum, setSearchAddendum] = useContext(AppSearchAddendumContext);
    const [view_paradigm, setViewParadigm] = useState(AppViewContext);

    return(
        <></>
    )

}

export default ContentView;