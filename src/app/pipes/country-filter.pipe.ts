import { Pipe, PipeTransform } from "@angular/core";
import { ICountry } from "../components/data-table/IdataTable";

@Pipe({
  name: "countryFilter",
  pure: false
})
export class CountryFilterPipe implements PipeTransform {
  transform(geoData: ICountry[], searchTerm: string): any {
    if (!geoData || searchTerm === undefined) {
      return geoData;
    }

    return geoData.filter(
      country =>
        country.countryName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
        -1
    );
  }
}
