import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   newUser: User;
   userRepo:Repository;
   private token = environment.token;

    constructor(private http:HttpClient) {

  }

  searchUsername(username:string) {
    interface ApiResponse {
       login: string,
        name: string,
       avatar_url: string,
       location: string,
       html_url: string,
       followers: number,
       following: number,
      public_repos: number,
       created_at: Date,

    }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?access_token=${this.token}`).toPromise().then(
        (results) => {
             this.newUser = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
     return promise
  }

  getUserRepos(username:string) {
      interface ApiResponse {
       name: string,
       description: string,
       html_url: string,
       language: string,
       forks:number,
       watchers:number
       updated_on: Date
      }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}/repos?access_token=${this.token}`).toPromise().then(
        (results) => {
             this.userRepo = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
     return promise
  }

}















  /*  getProfileInfo(){

    //return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)-using app details
     return this.http.get(`https://api.github.com/users/${this.username}?access_token=${this.token}`);
  }
  getProfileRepos(){

       return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${this.token}`);
  }
  updateProfile(username:string){
    this.username = username;
  }

}*/
//092ac5ce8ff7c9ab18fa2cd7e9404d3829104402
//Client ID: Iv1.ca62bfff5ab5f94f
//Client secret: 6cbf4042e7336ee6bfca47a4f0988a70e90ccd9c
//Private key 1f:90:21:12:34:24:17:12:8c:1f:d3:20:b9:6f:27:ed:3c:33:15:47
