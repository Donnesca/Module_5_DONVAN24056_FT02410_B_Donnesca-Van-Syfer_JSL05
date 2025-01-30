// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "I Will Always Love You", artist: "Whitney Houston", genre: "Soul" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Soul",
  Groot: "Pop",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here

  const playlist = Object.keys(guardians).map((guardian) => {
    const preferredGenre = guardians[guardian];
    const playlist = songs.filter((songs) => songs.genre === preferredGenre);
    return {
      [guardian]: playlist.map((songs) => ({
        title: songs.title,
        artist: songs.artist,
      })),
    };
  });

  return playlist;
}

const playlist = generatePlaylist(guardians, songs);

playlist.forEach((playlist) => {
  const guardians = Object.keys(playlist)[0];
  const playlistSongs = playlist[guardians];

  const guardianHeading = document.createElement("h1");
  guardianHeading.textContent = `${guardians}'s Playlist:`;
  document.body.appendChild(guardianHeading);

  const playlistList = document.createElement("ul");
  playlistSongs.forEach((songs) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${songs.title} by ${songs.artist}`;
    playlistList.appendChild(listItem);
  });
  document.body.appendChild(playlistList);
});
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
