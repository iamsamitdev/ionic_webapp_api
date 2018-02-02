import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// เรียกใช้งาน HttpClient  ไว้สำหรับติดต่อกับเว็บ API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // กำหนดตัวแปรเก็บ  URL ของเว็บ API
  baseURL:string; 
  // กำหนดตัวแปรไว้เก็บข้อมูลจาก web api ส่งไปหน้า home.html
  product:any;

  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.baseURL = "https://www.itgenius.co.th/productapi/showproduct.php";
  }

  // เรียกใช้ฟังก์ชัน viewDidload
  ionViewDidLoad(){
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data: any) => {
        //console.log(data);
        this.product = data;
      }
    )
  }


}
