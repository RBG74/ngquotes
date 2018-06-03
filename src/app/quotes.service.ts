import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Quote } from "./models/quote";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";

@Injectable()
export class QuotesService {
  myjsonUrl: string = "https://api.myjson.com/bins/gut7u";

  serviceQuotes: Quote[];

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    const r = this.http.get<Quote[]>(this.myjsonUrl);
    r.subscribe(quotes => {
      this.serviceQuotes = quotes;
    });
    return r;
  }

  addQuote(quote: Quote): Observable<Quote[]> {
    this.serviceQuotes.push(quote);
    const jsonQuotes = JSON.stringify(this.serviceQuotes);
    console.log(jsonQuotes);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put<Quote[]>(this.myjsonUrl, jsonQuotes, httpOptions)
  }

  removeQuote(quote: Quote): Observable<Quote[]> {
    const index = this.serviceQuotes.indexOf(quote);
    this.serviceQuotes.splice(index);

    const jsonQuotes = JSON.stringify(this.serviceQuotes);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put<Quote[]>(this.myjsonUrl, jsonQuotes, httpOptions);
  }
}
