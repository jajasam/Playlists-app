import useAuth from "../useAuth"
import { useEffect, useState } from "react"
import spotifyApi from "spotify-web-api-node"

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [playlists, setPlaylists] = useState([])

    // useEffect(() => {
    //     // Get a user's playlists
    //     spotifyApi.getUserPlaylists('thelinmichael')
    //     .then(function(data) {
    //         console.log('Retrieved playlists', data.body);
    //         setPlaylists(['r','r', 'r'])
    //     },function(err) {
    //         console.log('Something went wrong!', err);
    //     });
    // }, [])

    return (
        <div>
        {/* {
            playlists.map(playlist => (<div>{playlist}</div>))
        } */}
        </div>
    )
}

export default Dashboard
