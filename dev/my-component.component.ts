import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
        Hi, I'm {{name}} 
        <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome</span>
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name = 'Palantir';
}
