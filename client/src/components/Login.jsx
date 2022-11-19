import querystring from "query-string"

function Login() {
    const redirect_uri = "http://localhost:3000/"
    const client_id = "9a95e3d82ad34708a0c2aa0450f8d1ed"
    const scope = "streaming user-read-playback-state user-modify-playback-state playlist-read-private playlist-read-collaborative user-read-currently-playing"

    const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    });

    return (
        <div>
            <a href={AUTH_URL}>Log in with Spotify</a>
        </div>
    )
}

export default Login
