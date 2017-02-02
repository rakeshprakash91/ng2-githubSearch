import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {

    }

    searchUser(str: string) {
        // this.searchUrl = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this.http.get("https://api.github.com/users/" + str).map(res => res.json())
    }
    getUserRepos(str: string) {
        // this.searchUrl = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this.http.get("https://api.github.com/users/" + str + "/repos").map(res => res.json())
    }
}