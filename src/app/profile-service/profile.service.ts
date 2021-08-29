import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:any;
  private clientid!: "8035273870d0778107b0";
  private clientsecret:"b4aee1eba8670d25a47c4480e9484711764a3548"
  constructor(private http:HttpClient) { 
    this.username ="MUTHAKABRIAN"
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



