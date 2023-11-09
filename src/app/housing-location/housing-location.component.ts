import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from "../housinglocation";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet
    ],
    template: `
        <section class="listing">
            <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
            <h2 class="listing-heading">{{ housingLocation.name }}</h2>
            <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
            <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
        </section>
    `,
    styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation
    // Acest decorator descrie ce date urmează să primească componenta ca props prin tag
    //<app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    //[housingLocation] = denumirea propsului declarat cu ajutorul @Input după care urmează legătura cu date
    // ce se conțin în clasa unde componenta este folosită adică în homeComponent
}
