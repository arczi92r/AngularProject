import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';
declare function encodeURIComponent(s:string): string;
declare function unescape(s:string): string;
@Component({
    selector: 'app-crib-listing',
    templateUrl: './crib-listing.component.html',
    styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

    cribs: Array<any> = cribs;
    zmienna = "moja wartosc ";
    data:any;
    constructor() { 
         this.buildTable();
         console.log(this.buildTable());
    }

    ngOnInit() {
       
      //  window.open('data:application/vnd.ms-excel,', encodeURIComponent(this.data));

    }
onClickChildComponent()
{
    
}
public buildTable() : HTMLTableElement
{
    let heder = ["Group" , "Service1" ,"Service2"];
    let data = [{Group:"All", Service1: 20 ,Service2: 10 },
                {Group:"abcd@gmail.com", Service1: 15 ,Service2: 16 } ];

    let table :HTMLTableElement = document.createElement('table');
 let thead  = document.createElement("thead");
    let tbody  = document.createElement("tbody");
      var headRow = document.createElement("tr");
    heder.forEach(function(el) {
      var th=document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead); 
    data.forEach(function(el) {
      var tr = document.createElement("tr");
      for (var o in el) {  
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]))
        tr.appendChild(td);
      }
      tbody.appendChild(tr);  
    });
    table.appendChild(tbody);             
    return table;
}
tableToExcel2(){
  document.body.appendChild(this.buildTable());
        this.data = this.buildTable();
         var uri = 'data:text/csv;charset=utf-8,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>' + this.buildTable()+ '</table></body></html>'
         //window.location.href = uri + template;
          
          let dane = [{Group:"All", Service1: 20 ,Service2: 10 },
                {Group:"abcd@gmail.com", Service1: 15 ,Service2: 16 } ];
var a = window.document.createElement("a");

// zwróci coś podobnego do: blob:c64d02ec-14e0-41cf-8784-72bcd9ea9af7 zostanie zwrócone
a.href = uri + template; //window.URL.createObjectURL(blob);

// https://developer.mozilla.org/en/docs/Web/HTML/Element/a#Attributes
a.download = 'filename.csv';

document.body.appendChild(a);
a.click();
document.body.removeChild(a);
}
}
