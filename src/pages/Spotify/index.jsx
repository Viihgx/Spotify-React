// export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "https://localhost:3000/";
// const clientId = "3151eeed46bb483fbf913893230483eb";

// const scopes = [
//   "user-read-email",
//   "user-read-private",
//   "user-modify-playback-state",
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
//   "user-read-playback-position",
// ];

// export const getTokenFromUrl = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       let parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//       return initial;
//     }, {});
// };

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;