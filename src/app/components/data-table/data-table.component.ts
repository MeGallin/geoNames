import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { HttpGetService } from "../../services/httpGet/http-get.service";
import { ICountry } from "../../components/data-table/IdataTable";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("400ms ease-in", style({ transform: "translateX(-50%)" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ])
  ]
})
export class DataTableComponent implements OnInit {
  // Data from service
  public geoData: ICountry[];
  public error: string;

  // table header arrow
  public showSingleCountry: boolean = false;
  public showCountryArrows: boolean;
  public showContinentArrows: boolean;
  public showPopulationArrows: boolean;
  public showAreaArrows: boolean;

  // Input component
  searchTerm: string;
  placeholder = "Search by Country";

  // Button Component
  label = "X";
  class = "btn btn-success";
  inputButton = "RESET";
  inputClass = "btn btn-warning";

  // Single country details
  public languages: string;
  public continent: string;
  public countryName: string;
  public continentName: string;
  public currencyCode: string;
  public countryCode: string;
  public capital: string;
  public population: string;
  public area: string;
  public space: number;
  public geoNameId: string;

  constructor(private geoData$: HttpGetService) {}

  ngOnInit(): void {
    this.geoData$.getContent().subscribe(
      res => {
        this.geoData = res;
      },
      error => {
        console.log(error);
        this.error = error;
      }
    );
  }

  showCountryData(data) {
    this.showSingleCountry = true;
    this.continentName = data.continentName;
    this.continent = data.continent;
    this.countryName = data.countryName;
    this.languages = data.languages;
    this.currencyCode = data.currencyCode;
    this.countryCode = data.countryCode;
    this.capital = data.capital;
    this.population = data.population;
    this.area = data.areaInSqKm;
    this.geoNameId = data.geonameId;

    this.space = parseInt(this.population) / parseInt(this.area);

    console.log(data);
  }

  closeShowSingleCountry() {
    this.showSingleCountry = false;
  }

  clearInput(e) {
    this.searchTerm = "";
    e.searchTerm = "";
  }

  sortType(sort) {
    if (sort === "country_up") {
      this.geoData.sort(this.sortByCountryNameAsc);
      this.showCountryArrows = false;
    }

    if (sort === "country_down") {
      this.geoData.sort(this.sortByCountryNameDec);
      this.showCountryArrows = true;
    }

    if (sort === "continent_up") {
      this.geoData.sort(this.sortByContinentNameAsc);
      this.showContinentArrows = false;
    }

    if (sort === "continent_down") {
      this.geoData.sort(this.sortByContinentNameDec);
      this.showContinentArrows = true;
    }

    if (sort === "area_up") {
      this.geoData.sort(this.sortByAreaAsc);
      this.showAreaArrows = false;
    }

    if (sort === "area_down") {
      this.geoData.sort(this.sortByAreaDes);
      this.showAreaArrows = true;
    }

    if (sort === "population_up") {
      this.geoData.sort(this.sortByPopulationAsc);
      this.showPopulationArrows = false;
    }

    if (sort === "population_down") {
      this.geoData.sort(this.sortByPopulationDes);
      this.showPopulationArrows = true;
    }
  }

  sortByCountryNameAsc(a, b) {
    if (a.countryName > b.countryName) return 1;
    else if (a.countryName === b.countryName) return 0;
    else return -1;
  }
  sortByCountryNameDec(a, b) {
    if (a.countryName < b.countryName) return 1;
    else if (a.countryName === b.countryName) return 0;
    else return -1;
  }
  sortByContinentNameAsc(a, b) {
    if (a.continent > b.continent) return 1;
    else if (a.continent === b.continent) return 0;
    else return -1;
  }
  sortByContinentNameDec(a, b) {
    if (a.continent < b.continent) return 1;
    else if (a.continent === b.continent) return 0;
    else return -1;
  }
  sortByAreaAsc(a, b) {
    return parseInt(a.areaInSqKm) - parseInt(b.areaInSqKm);
  }
  sortByAreaDes(a, b) {
    return parseInt(b.areaInSqKm) - parseInt(a.areaInSqKm);
  }

  sortByPopulationAsc(a, b) {
    return parseInt(a.population) - parseInt(b.population);
  }
  sortByPopulationDes(a, b) {
    return parseInt(b.population) - parseInt(a.population);
  }
  onSearch(e) {
    console.log(e);
  }
}
