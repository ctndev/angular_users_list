import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ctn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}

  isDark: boolean = false //control initial theme

  @HostBinding('class') get themeMode(){
    return this.isDark ? 'theme-dark' : 'theme-light'
  }

  receiverTheme($event: any){
    if($event == 'light_mode'){
      this.isDark = true
      this.renderer.setAttribute(this.document.body, 'class', 'theme-dark')
    }else{
      this.isDark = false
      this.renderer.setAttribute(this.document.body, 'class', 'theme-light')
    }
  }

  ngOnInit(): void {
    this.isDark = false
    this.renderer.setAttribute(this.document.body, 'class', 'theme-light')
  }

}
