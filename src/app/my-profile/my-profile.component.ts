import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profile-service/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });
  this.profileService.getProfileRepos().subscribe(repos => {
     this.repos = repos;
   });

  }



  ngOnInit(): void {

    this.profileService.updateProfile('Bnabz');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);

  }

}
