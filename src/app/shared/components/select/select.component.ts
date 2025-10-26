import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
 @Input() title:string = ""
 @Input() data:any[] = []
 @Output() selectvalue= new EventEmitter()
constructor(){}
ngOnInit(){}
detectchanges(event:any){
this.selectvalue.emit(event)
}
}
