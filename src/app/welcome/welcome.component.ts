//package name

// Below is similar to import java.util.list; 
// So from ES6 onwards, you can use 'classes' in js
// Now each module is a collection of classes and function definitions
// You can import the needed modules as per the below syntax
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// In Java we have access modifiers like public indicates where this class can be used
// export is similar to an access modifier that denotes that this class can be used outside the boundary of the module
export class WelcomeComponent implements OnInit {

  // Member variables
  message: string = 'hello world';
  messageFromService:string;

  // aha! a constructor duh!
  // Inject an ActivatedRoute
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  // method implemented from OnInit
  ngOnInit() {
    //this.message = ' how are you..';
    // console.log(this.route.snapshot.params['name']);
    // this.message = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWoldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    console.log('successful response :: ' + response.message);
    this.messageFromService = response.message;
  }

}
