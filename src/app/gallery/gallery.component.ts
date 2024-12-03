import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule aquí

@Component({
  selector: 'app-gallery',
  standalone: true, // Marca como standalone
  imports: [CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cities: any[] = [
    { name: 'Madrid', description: 'Capital de España', temperature: 0 , image: 'madrid.jpg'},
    { name: 'Barcelona', description: 'Ciudad costera de España', temperature: 0, image: 'barcelona.jpg'  },
    { name: 'New York', description: 'Ciudad en los EE.UU.', temperature: 0, image: 'newyork.jpg'}
  ];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherForCities();
  }

  getWeatherForCities() {
    // Aquí llamamos al servicio para obtener el clima de cada ciudad
    this.cities.forEach(city => {
      this.weatherService.getWeatherByCity(city.name).subscribe(data => {
        city.temperature = data.main.temp; // Asignamos la temperatura a la ciudad
      });
    });
  }
}
