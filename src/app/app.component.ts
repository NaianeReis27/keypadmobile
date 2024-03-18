import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'keypadmobile';
  altura? = 40 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getSize(event);
  }

  getSize(event: any){
    this.altura = window.visualViewport?.height;
    console.log('Altura da tela 2:', window.visualViewport?.height,  document.documentElement.clientHeight);
  }
  
}
