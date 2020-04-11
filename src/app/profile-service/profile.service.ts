import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   private token = environment.token;
  private username:string;

 private client_id = "Iv1.ca62bfff5ab5f94f";
  private client_secret ="6cbf4042e7336ee6bfca47a4f0988a70e90ccd9c";

    constructor(private http:HttpClient) {
    this.username = "Bnabz";
  }
    getProfileInfo(){

    //return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.token)
  }
  getProfileRepos(){
    //return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.token)
  }
  updateProfile(username:string){
    this.username = username;
  }

}
//092ac5ce8ff7c9ab18fa2cd7e9404d3829104402
//Client ID: Iv1.ca62bfff5ab5f94f
//Client secret: 6cbf4042e7336ee6bfca47a4f0988a70e90ccd9c
//Private key 1f:90:21:12:34:24:17:12:8c:1f:d3:20:b9:6f:27:ed:3c:33:15:47
