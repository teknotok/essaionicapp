import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teknotok',
  templateUrl: './teknotok.page.html',
  styleUrls: ['./teknotok.page.scss'],
})
export class TeknotokPage implements OnInit {
  link;
  openLink(url) {
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(
      url
    )
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.openLink('https://teknotok.com/');
  }

}
