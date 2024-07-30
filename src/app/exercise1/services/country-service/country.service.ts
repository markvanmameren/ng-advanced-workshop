import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../../interfaces/country.interface";

const countriesUrl = "http://localhost:3000/countries";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  httpClient = inject(HttpClient);

  getCountries$(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(countriesUrl);
  }
}
