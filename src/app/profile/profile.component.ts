import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile-service/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profile:any;
  repos:any;
  username!:string;

constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });
}
 
findProfile(){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  })
}

  ngOnInit() {
    this.profileService.updateProfile('MUTHAKABRIAN');
    
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);
  }


}
