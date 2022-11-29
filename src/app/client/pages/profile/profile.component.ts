import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private authsevice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  dangxuat(){
    this.authsevice.dangxuatuser()
    this.router.navigate(['/client/login'])
    setTimeout(this.reload,0.01)
  } 
  reload()
  {
    location.reload()
  }
}
