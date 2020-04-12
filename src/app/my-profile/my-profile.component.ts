import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profile-service/profile.service';
import { User } from '../user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
 user:User;


/*  constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });
  this.profileService.getProfileRepos().subscribe(repos => {
     this.repos = repos;
   });

 }*/
   constructor(private profileService:ProfileService){

   }

  getByUser(username) {
      this.profileService.searchUsername(username).then(
     (success) => {
      this.user = this.profileService.newUser;
      console.log(this.user)
     },
     (error) => {
      console.log(error);
    }
      );
  }


  ngOnInit(): void {

     this.getByUser("Bnabz");

  }

}
