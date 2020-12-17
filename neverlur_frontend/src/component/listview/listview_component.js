import React from 'react';
import './listview_component.css';
//import listViewContext from '../../context/listview/listViewContext';


const data = () =>{
    let dta = [];
    for(let i = 0; i > 20; i++){
        dta[i] = 'Take the Veil Cerpin Taxt'
    }
    return dta;
}

function ListView(){
    const songs = data();

    return (
        <div className="listview">
            <div className="songlist">
                <ul className="loi">
                    {
                        songs.map((song, i) =>
                    <li key={i}>{song}</li>)
                    }
                </ul>
            </div>
        </div>
    )
    
}

export default ListView;