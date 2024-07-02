import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='';
  Password:string='';
  
  signup(){
    this.router.navigateByUrl('/signup');
  }

  constructor(private http: HttpClient,
    public router : Router) { }


  ngOnInit(): void {

  }
  Login(Email:string,PWD:string):any  {
   
   
    var param = {email:Email,pwd:PWD}; 
    //console.log(param);
    
    this.http.get<any>('http://localhost:12285/api/Registrations/'+Email+'/'+PWD).subscribe(data => {
       
    
     console.log(data);
     
     if(data.Status=='Error') { alert(data.Message);}
     else{
       localStorage.setItem("User",JSON.stringify(data));
       
       if(data.value.usertype == 'Admin'){
         window.location.href="/adminDashboard";
       }else{
         window.location.href="/customerDashboard";
          
        }
      }
        
      });
 return false;

  }

}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}

