import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';
import { Book } from './model/Book';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros : any;
  bookService : BookService;

  constructor(bookService: BookService) { 
    this.bookService = bookService;
    //this.booksService = new BooksService();
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))

  }

}
