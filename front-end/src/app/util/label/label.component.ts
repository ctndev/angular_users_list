import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ctn-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  constructor() { }

  @Input('label') label: string
  @Input('dado') dado: string | number

  ngOnInit(): void {
  }

}
