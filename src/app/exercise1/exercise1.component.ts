import { Component, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Country } from "./interfaces/country.interface";
import { CountryService } from "./services/country-service/country.service";

@Component({
  selector: "app-exercise1",
  templateUrl: "./exercise1.component.html",
  styleUrls: ["./exercise1.component.css"],
})
export class Exercise1Component {
  countryService = inject(CountryService);

  countries$ = this.countryService.getCountries$();

  formControl = new FormControl<Country["id"]>(null);
}
