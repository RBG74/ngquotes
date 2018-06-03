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

}
