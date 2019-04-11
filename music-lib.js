const Library = function(name, creator){
    this.name = name;
    this.creator = creator;
    this.playLists = [];
}

Library.prototype.newPlayList = function(list){
    this.playLists.push(list)
}

const Playlist = function(name) {
    this.name = name;
    this.tracks = [];
}

Playlist.prototype.newTracks = function(track){
    this.tracks.push(track)
}
Playlist.prototype.overallRating = function(){
    return (this.tracks.map( track => {
        return track.rating
    }).reduce( (a,b) => { return a + b}) ) / this.tracks.length;
}
Playlist.prototype.totalDuration = function() {
        return this.tracks.map( track => {
                return track.length
                }).reduce( (a,b) => { return a + b })
}


const Track = function(title,rating,length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

const abc = new Track("abc",3,120);
const children = new Playlist('children');
children.newTracks(abc);
const efg = new Track("efg",5,100);
children.newTracks(efg);
const myLib = new Library("first","me")
myLib.newPlayList(children);
console.log(myLib)