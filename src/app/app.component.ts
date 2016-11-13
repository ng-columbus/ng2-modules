import { Component } from '@angular/core';

// import just the counter number primitive
import {counter} from './es6-module/named-export';

// import a named binding but reference it as another variable
import {counter as counterNbr} from './es6-module';

import {counterObject} from "./es6-module/named-export";

// import the incrementCounter function
import {incrementCounter} from './es6-module';

// read the default object
import plainObject from "./es6-module/default-export";

// import the type
import {CounterClass} from "./es6-module/named-export";


// this will create an object containing a reference to all exported module values
import * as namedExportModule from './es6-module/named-export';

// allBindings will be an object that references all the bindings defined in ./es6-module/index.ts
import * as allBindings from "./es6-module";

// import lodash library
import * as _ from "lodash";
// import map from "lodash/map"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counterObject: CounterClass;
  moduleObject: any;


  onClickCounterObject(): void {
    this.counterObject.incrementValue();
    // we could do this
    // this.counterObject.value++;
  }

  onClickCounter(): void {
    // Cannot do this, imported references are const
    // namedExportModule.counter++;

    // call the module function through the module object reference
    namedExportModule.incrementCounter(1);

    // call the imported module function
    // incrementCounter(1);
  }

  ngOnInit() {
    console.log('imported module named-export', namedExportModule);
    console.log('imported allBindings', allBindings);
    console.log('plainObject', plainObject);
    console.log('counterObject', counterObject);
    console.log('counter primitive', counter);

    console.log("lodash version", _.VERSION);

    this.moduleObject = namedExportModule;
    this.counterObject = counterObject;
  }
}
