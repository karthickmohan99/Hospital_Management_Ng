import { Component,OnInit, Renderer2} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital-Management-System';

  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    const jsFiles = [
      '../assets/js/script.js',
      // Add more file paths as needed
    ];
    // Iterate over the array of file paths
    jsFiles.forEach(filePath => {
      // Create a script element
      const script = this.renderer.createElement('script');
      script.src = filePath;
      // Append the script tag to the body of the document
      this.renderer.appendChild(document.body, script);
    });
  }
}