import { Component } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private service: BookServiceService, private router: ActivatedRoute){}

  bookDetails : any = {}
  getParamId : string | null = ""
  imageUrl : string = ""
  isLoading: boolean = true;

  ngOnInit(){
    this.getParamId = this.router.snapshot.paramMap.get('id');
    this.service.bookDetails(this.getParamId).subscribe((result)=>{
      this.bookDetails = result.book
      this.isLoading = false
      console.log(this.bookDetails)
    })
  }

  AddToCart(id : string){
    console.log(id)
  }
}
