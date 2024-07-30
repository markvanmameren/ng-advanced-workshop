import { Component, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, switchMap } from "rxjs";
import { CountryService } from "./country.service";
import { Country, State } from "./types";

@Component({
  selector: "app-exercise2",
  templateUrl: "./exercise2.component.html",
  styleUrls: ["./exercise2.component.css"],
})
export class Exercise2Component {
  countryService = inject(CountryService);

  countryDropdown = new FormControl<Country["id"] | null>(null);
  stateDropdown = new FormControl<State["code"] | null>(null);

  countries$: Observable<Country[]> = this.countryService.getCountries();
  states$: Observable<State[]> = this.countryDropdown.valueChanges.pipe(
    switchMap((countryCode) => this.countryService.getStates(countryCode))
  );
}
