import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  
 showImg(img:string){
 Swal.fire({
  imageUrl: img,
  showConfirmButton: false,
  background :"rgba(0,0,132,0.1)",
  backdrop : `rgba(0,0,132,0.3)`,
  
});

 }

}
