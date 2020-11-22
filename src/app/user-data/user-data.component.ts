import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../services/posts-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  nameSearch: string = '';  //for searching:
  // obj for show data:
  allData: Object;
  isEdit = false;
  // obj for edit form:
  formObj ={
    productNumber: '',
    productName: '',
    productPrice: '',
    productDescription: '',
    _id: ''
  }

  constructor(private postService: PostsServiceService) { }

  ngOnInit(){
    this.showAllData();
  }

  // add data:
  addData(user){
    console.log("user", user);
    this.postService.createData(user).subscribe((response) => {
      
      this.showAllData();
    })
  }

  showAllData(){
    this.postService.getAllData().subscribe((response) => {
      this.allData = response
    });
  }

  // update data:
  updateData(){
    this.postService.updateData(this.formObj).subscribe((response) => {
      // use confirm for popup msg:
      confirm("Sure too Update Data.");
      this.showAllData();
    })
  }

  // edit data:
  editData(user){
    this.isEdit = true;
    this.formObj = user;
  }

  // delete data:
  deleteData(user){
    this.postService.deleteData(user).subscribe(() => {
      // use confirm for popup msg:
      confirm("Sure too Delete Data.");
      this.showAllData();
    })
  }

}
