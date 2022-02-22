const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3001/home";
const clientId = "151d0e09d8b345f7af9358a2ad8a4644";

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}`;