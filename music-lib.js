class Library {
    constructor (name, creator){
        this.name = name;
        this.creator = creator;
        this.playLists = [];

    }
    
    set newPlayList (list){
        this.playLists.push(list)
    }
}

class Playlist {
    constructor (name) {
        this.name = name;
        this.tracks = [];
    }

    set newTracks (track){
        this.tracks.push(track)
    }
    get overallRating (){
        return (this.tracks.map( track => {
            return track.rating
        }).reduce( (a,b) => { return a + b}) ) / this.tracks.length;
    }
    get totalDuration (){
        return this.tracks.map( track => {
                return track.length
                }).reduce( (a,b) => { return a + b })
    }
}

class Track {
    constructor (title,rating,length) {
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
}

const abc = new Track("abc",3,120);
const children = new Playlist('children');
children.newTracks = abc
const efg = new Track("efg",5,100);
children.newTracks = efg
const myLib = new Library("first","me")
myLib.newPlayList = children
console.log(myLib)