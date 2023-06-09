import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
/**
 * Requirements:
 * 1. Add a input field which updates a property,username via 2 way binding
 * 2. Output the username property via Sting interpolation in a paragraph
 * 3. Add a button which may only be clicked if the username is NOT an empty string
 * 4. Upon clicking the button, the username should be reset to an empty string
 */
username="";

onReset(){
  this.username=""
}
}
