import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GalleryComponent], // Asegúrate de importar GalleryComponent y CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaWeather';
  weatherData: any;
  city: string = 'Alicante'; // Cambia la ciudad según lo que quieras buscar

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData); // Muestra toda la data
      console.log(this.weatherData.main.temp); // Muestra la temperatura
      console.log(this.weatherData.main.name);
    });
  }
}
