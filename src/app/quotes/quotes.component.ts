import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Hello!", "Bob"),
    new Quote("World", "Jon"),
  ];
  formQuote: string;
  formAuthor: string;

  constructor() { }

  ngOnInit() {
  }

  addQuote(){
    console.log(this.formQuote, this.formAuthor);
    this.quotes.push(
      new Quote(this.formQuote, this.formAuthor)
    );
    this.resetForm();
  }

  resetForm()
  {
    this.formQuote = "";
    this.formAuthor = "";
  }

}
