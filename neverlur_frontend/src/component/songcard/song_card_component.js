import React from 'react';
import './song_card_component.css';

export default class SongCard extends React.Component {

    // render(){
    //         return <div class="song_container">
    //             <div class="card-image"></div>
    //                 { /*<img>src={this.props.image_url}</img>*/
    //                 <h2>{this.props.image_url}</h2> }
    //             <div class="card-text"></div>
    //                 <span class="genre_name">{this.props.genre}</span>
    //                 <h2>{this.props.song_name}</h2>
    //                 <p>{this.props.album_name}</p>
    //             <div class="card-stats"></div>
    //                 <div class="stat">
    //                     <div class="value">{this.props.release_year}</div>
    //                     <div class="type">Release Year</div>
    //                 </div>
    //                 <div class="stat border">
    //                     <div class="value">{this.props.number_listens}</div>
    //                     <div class="type">Listens</div>
    //                     </div>
    //                 <div class="stat">
    //                     <div class="value">Download</div>
    //                 </div>
    //             </div> 
    //     }

    render(){
        return <div class="song_container">
                 <div class="card-image">
                        <img src="https://miro.medium.com/max/700/1*_jQh1M4sshclQ2Hzs37LEw.jpeg"></img>
                   </div>
                   <div class="card-text-container"></div>
                   <span></span>
                     <span>{this.props.genre}</span>
                     <h2>{this.props.song_name}</h2>
                     <h4>{this.props.artist_name}</h4>
    <p>{this.props.album_name} ({this.props.release_year})</p>
    
    </div>
    }
        
}