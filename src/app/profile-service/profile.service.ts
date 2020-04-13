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
   newRepo:Repository;
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
       updated_at: Date
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

  getRepoList(reponame:string) {
      interface ApiResponse {
       name: string,
       description: string,
       html_url: string,
       language: string,
       forks:number,
       watchers:number
       updated_at: Date
      }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/search/repositories?q=${reponame}&per_page=1000 access_token=${this.token}`).toPromise().then(
        (results) => {
             this.newRepo = results;
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












// `https://api.github.com/repositories/${reponame}?access_token=${this.token}`

// `https://api.github.com/search/repositories?q=${data}&per_page=1000`


// "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"


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
