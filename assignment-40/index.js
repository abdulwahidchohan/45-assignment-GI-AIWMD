"use strict";
// Function to create a music album object
// 
// @param {string} ArtistName - The name of the artist
// @param {string} AlbumTitle - The title of the album
// @param {number} [tracks] - The number of tracks in the album (optional)
// @returns {Object} - The album object containing the artist name, album title, and number of tracks (if provided)
function make_album(ArtistName, AlbumTitle, tracks) {
    // Create an album object with the artist name and album title
    const album = {
        ArtistName: ArtistName,
        AlbumTitle: AlbumTitle
    };
    // If the tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
// Create and print album1
const album1 = make_album("Talha Anjum", "Open Letter");
console.log(album1); // { ArtistName: 'Talha Anjum', AlbumTitle: 'Open Letter' }
// Create and print album2
const album2 = make_album("Talhah Yunus", "Shikwa");
console.log(album2); // { ArtistName: 'Talhah Yunus', AlbumTitle: 'Shikwa' }
// Create and print album3 with the number of tracks
const album3 = make_album("Umair", "ROCKSTAR WITHOUT A GUITAR", 20);
console.log(album3); // { ArtistName: 'Umair', AlbumTitle: 'ROCKSTAR WITHOUT A GUITAR', tracks: 20 }
