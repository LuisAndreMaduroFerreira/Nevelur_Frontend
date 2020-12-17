import React, {useState} from 'react';
import './CollapsibleGroupButton.css';

function CollapsibleGroupButton(props){

    const [state, setState] = useState(true);
    
    return (
        <div className="dropdown-container" >
	<div className="collapsible-button open" onClick={() => {
            setState(!state)              
        }}>
    {props.groupName}
		<div className={true === state ? 'fas fa-times' : 'fas fa-bars'}></div>
	</div>
	<ul className="collapsible-list">
		<li><a href="#">Item 1</a></li>
		<li><a href="#">Item 2</a></li>
		<li><a href="#">Item 3</a></li>
		<li><a href="#">Item 4</a></li>
		<li><a href="#">Item 5</a></li>
	</ul>
</div>
    )
}


export default CollapsibleGroupButton;