import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:any;
  private clientid!: "8035273870d0778107b0";
  private clientsecret!:"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"
  constructor(private http:HttpClient) { 
    this.username ="DeveloperOwala"
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}



