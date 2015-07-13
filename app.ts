/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'my-app.html',
    directives: [NgFor, NgIf]
})

// Component controller
class MyAppComponent {
    name: string;
    names: Array<string>;
    todos: Array<string>;
  
    constructor() {
        this.name = 'Alice';
        this.names = ["Aarav", "MartÃ­n", "Shannon", "Ariana", "Kai"];
    }
}



bootstrap(MyAppComponent);
