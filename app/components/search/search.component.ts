import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    searchStr : string;
    userDetails : any;
    repos : any;
    constructor(private spotifyService : SpotifyService){}
    searchArtist(){
        if(this.searchStr){
            this.spotifyService.searchUser(this.searchStr).subscribe(result => {
                this.userDetails = result;
            })
            this.spotifyService.getUserRepos(this.searchStr).subscribe(result => {
                debugger
                this.repos = result;
            })
        }
    }
}
