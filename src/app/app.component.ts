import {
  Component,
  ViewContainerRef, ViewChild, AfterViewInit,
  AfterContentInit, ComponentFactoryResolver, ComponentRef, ComponentFactory, OnInit
} from '@angular/core';
import { AlertComponent } from "./alert/alert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = "success";

    this.componentRef.instance.output.subscribe(event => console.log(event));
  }
  OpenExcel() {
    console.log("aaaaa");

    //var blob = new Blob(['1,2,3,Something Test'], { type: 'text/csv' });
    //var saveBlob = window.navigator.msSaveBlob;
    //if (saveBlob) {
    //  saveBlob(blob, "filename.csv");
    //}
    var blobObject;
    if (window.Blob && window.navigator.msSaveOrOpenBlob) {

      // Falls to msSaveOrOpenBlob if download attribute is not supported

      blobObject = new Blob(['1,2,3,Something Test']);
      window.navigator.msSaveOrOpenBlob(blobObject, 'blblbbl' + '.' + 'csv');


    }
  }


  createComponent(type) {


  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

}
