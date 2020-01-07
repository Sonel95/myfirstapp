import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  data:any=[]
  history=[]
  constructor(private http:HttpClient){

  }

  completedFilter(scode) {
    return this.data.current_status_code === scode;
}
  showHistory(data){
    console.log("showing history :",data);
    this.history=data.scan;
  }
  ngOnInit() {
    console.log("running app");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer tTU3gFVUdP' });
  let options = { headers: headers };
    console.log("headers:",headers);
    return this.http.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank',{email:"mayankmittal@intugine.com"},options)
    .subscribe(
        (res:any) =>{
            console.log("response:",res.data);
            this.data=res.data;
        },
        err => {
            console.log(err.message);
        }
    )
  } 
}


