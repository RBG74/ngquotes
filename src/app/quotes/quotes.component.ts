import { Component, OnInit } from "@angular/core";
import { QuotesService } from "../quotes.service";
import { Quote } from "../models/quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  formQuote: string;
  formAuthor: string;

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(quotes => {
      this.quotes = quotes;
    });
  }

  addQuote() {
    this.quotesService
      .addQuote(new Quote(this.formQuote, this.formAuthor))
      .subscribe(quotes => (this.quotes = quotes));
    this.resetForm();
  }

  resetForm() {
    this.formQuote = "";
    this.formAuthor = "";
  }

  removeQuote(quote: Quote) {
    this.quotesService
      .removeQuote(quote)
      .subscribe(quotes => (this.quotes = quotes));
  }
}
