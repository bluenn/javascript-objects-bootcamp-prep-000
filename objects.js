var playlist = {
    dylan: "tangled up in blue",
    springsteen: "Born to Run"

}

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removefromPlaylist(playlist, dylan) {
  delete playlist[dylan];
  return playlist;
}
