import { Component } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private service: BookServiceService, private router: Router ){}

  books: any = []
  isLoading: boolean = true;

  ngOnInit(){
    this.service.booksData().subscribe((result) => {
      this.books = result.books
      this.isLoading = false;
      console.log(this.books)
    })
  }

  viewBook(b: any) {
    this.router.navigate(['book',b._id])
  }
}
