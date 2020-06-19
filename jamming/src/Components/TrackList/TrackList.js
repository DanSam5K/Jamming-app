import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';


class TrackList extends React.Component {
    render(){
        return(
            <div class="Playlist">
                <input value="New Playlist"/>
                {/* <TrackList /> */}
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default TrackList;