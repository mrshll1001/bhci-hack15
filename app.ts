/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf, CSSClass} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'my-app.html',
    directives: [NgFor, NgIf, CSSClass]
})

// Component controller
class MyAppComponent {
    name: string;
    names: Array<string>;
    version: string;
    included: Array<boolean>;
    rights;
    includes;

    constructor()
    {
        var self = this;
        this.name = 'Alice';
        this.names = ["Aarav", "MartÃ­n", "Shannon", "Ariana", "Kai"];
        this.version = 'simple';
        $.getJSON('rights.json', function(data)
        {
          self.rights = data;
          setTimeout(function(){$('.tooltipped').tooltip({delay: 50});$('.collapsible').collapsible({accordion:false});},1000);
        });
        $.getJSON('includes.json', function(data)
        {
          self.includes = data.includes;
          setTimeout(function(){$('.tooltipped').tooltip({delay: 50});$('.collapsible').collapsible({accordion:false});},1000);
        });
        this.inc();
    }

    ver(v)
    {
        this.version = v;
        /*this.inc();*/
    }

    inc()
    {

      var incs = {'simple':[!1,!1,!0,!0,!0],'full':[!1,!0,!0,!1,!1],'our':[!0,!0,!0,!0,!0]}
      this.included = incs[this.version];
    }
}

//



bootstrap(MyAppComponent);
