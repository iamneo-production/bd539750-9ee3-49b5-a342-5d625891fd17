import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereeService } from 'src/app/components/services/referee.service';
import { Referee, EditRefereeCards } from 'src/app/components/admin/add-referee/add-referee.component.types';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.component.html',
  styleUrls: ['./add-referee.component.css']
})
export class AddRefereeComponent implements OnInit {

  isShowReferees = true;

  refereesDetailList: Referee[] = [];

  refereesDetail: Referee[] = [];      

  searchKey = '';

  refereeStatus = '';

  refereeInfo : Referee = {
    refereeId : 0,
    refereeName : "",
    refereeImage : "",
    noOfMatches : "",
    refereeLocation : ""
  };

  nameValidStatus : string = "";
  locationValidStatus : string = "";
  experienceValidStatus : string = "";
  imgurlValidStatus : string = "";

  editId : number = -1;

  editRefereeCards: EditRefereeCards[] = [];

  constructor(private refereeService: RefereeService, private router: Router) { }

  ngOnInit(): void {
    this.loadReferee();
    console.log(this.refereeInfo, this.refereesDetail, this.refereesDetailList);
  }

  onClickVenue() {
    this.router.navigateByUrl('admin/addvenues');
  }

  onClickTeams() {
    this.router.navigateByUrl('admin/addteams')
  }

  onClickViewuser() {
    this.router.navigateByUrl('admin/viewuser')
  }

  logout
  () {
    this.router.navigateByUrl('user/login')
  }

  loadReferee() {
    this.refereeStatus = "Loading...";
    this.refereesDetail.splice(0);
    this.refereesDetailList.splice(0);
    this.editRefereeCards.splice(0);
    this.refereeService.getAllRefreeDetails().subscribe((result) => {
        this.refereesDetailList = [...result];
        for (let referee of this.refereesDetailList) {
          this.refereesDetail.push({
            refereeId : referee.refereeId,
            refereeName : referee.refereeName,
            refereeImage : referee.refereeImage,
            noOfMatches : referee.noOfMatches,
            refereeLocation : referee.refereeLocation
          });
          this.editRefereeCards.push({
            refereeId : referee.refereeId,
            isEdit : false
          })
        }
      });
    if(this.refereesDetail.length === 0)
      this.refereeStatus = "No referee";
    console.log(this.editRefereeCards, this.refereesDetail);  
  }

  searchReferee() {
    this.refereesDetail = [];
    for(let refereeDetail of this.refereesDetailList)
      if(refereeDetail.refereeName.toLowerCase().search(this.searchKey.toLowerCase()) > -1)
      {
        this.refereesDetail.push(refereeDetail);
      }
  }

  showAddReferee() {
    this.nameValidStatus = "";
    this.locationValidStatus = "";
    this.experienceValidStatus = "";
    this.imgurlValidStatus = "";
    this.refereeInfo = {
      refereeId : 0,
      refereeName : "",
      refereeImage : "",
      noOfMatches : "",
      refereeLocation : ""
    };
    this.isShowReferees = false;
    
  }

  showReferees() {
    this.cancelAllEdit();
    this.isShowReferees = true;
  }

  onEdit(id) {
    this.nameValidStatus = "";
    this.locationValidStatus = "";
    this.experienceValidStatus = "";
    this.imgurlValidStatus = "";
    for(let refereeIndex = 0; refereeIndex <  this.refereesDetail.length; refereeIndex++)
      if(this.refereesDetail[refereeIndex].refereeId === id) {
        this.editId = refereeIndex;
        this.refereeInfo = this.refereesDetail[refereeIndex];
        this.editRefereeCards[refereeIndex].isEdit = true;
      }
      else
        this.editRefereeCards[refereeIndex].isEdit = false;
  }

  onSave() {
    this.refereeInfo.noOfMatches = this.refereeInfo.noOfMatches + "";
    this.validateName(this.refereeInfo.refereeName);
    this.validateExperience(this.refereeInfo.noOfMatches);
    this.validateUrl(this.refereeInfo.refereeImage);
    if(this.nameValidStatus === " " && this.experienceValidStatus === " " && this.imgurlValidStatus === " ") {
      console.log(this.refereeInfo);
      this.refereeService.updateRefree(this.refereeInfo.refereeId, this.refereeInfo).subscribe({
        next: (response) => {
          alert("Referee Updated Successfully!");
          this.loadReferee();
        },
        error: (err) => {
          alert(err.message);
        }
      });
      this.editRefereeCards[this.editId].isEdit = false;
    }
  }

  cancelEdit(id) {
    for(let refereeIndex = 0; refereeIndex <  this.refereesDetail.length; refereeIndex++) {
      if(this.refereesDetail[refereeIndex].refereeId === id) {
        this.editRefereeCards[refereeIndex].isEdit = false;
        break;
      }
    }
  }

  cancelAllEdit() {
    for(let refereeIndex = 0; refereeIndex <  this.refereesDetail.length; refereeIndex++) 
        this.editRefereeCards[refereeIndex].isEdit = false;
  }

  deleteReferee(id) {
    console.log(id);
    this.refereeService.deleteRefree(id).subscribe({
      next: (result) => {
        this.loadReferee();
      },
      error : (respose) => {
        console.log(respose);
      } 
    });
  }

  addReferee() {
    this.refereeInfo.refereeId = 0;
    this.refereeInfo.noOfMatches = this.refereeInfo.noOfMatches + "";
    console.log(this.refereeInfo);
    this.validateName(this.refereeInfo.refereeName);
    this.validateLocation(this.refereeInfo.refereeLocation)
    this.validateExperience(this.refereeInfo.noOfMatches);
    this.validateUrl(this.refereeInfo.refereeImage);
    if(this.nameValidStatus === " " && this.experienceValidStatus === " " && this.imgurlValidStatus === " " && this.locationValidStatus === " ") {
      console.log(this.refereeInfo);
      this.refereeService
        .setRefreeDetails(this.refereeInfo)
        .subscribe({
          next: (result) => {
            alert("Referee Added Successfully!");

            location.reload();
          },
          error: (err) => {
            alert(err.message);
          }
        });
      this.refereeInfo = {
        refereeId : 0,
        refereeName : "",
        refereeImage : "",
        noOfMatches : "",
        refereeLocation : ""
      };
    }
    this.loadReferee();
  }

  validateName(name) {
    if(name.length < 1 || name == null)
      this.nameValidStatus = "Enter the referee name";
    else 
      if(name.match(/^[a-zA-Z\s\.]*$/) == null)
        this.nameValidStatus = "Referee name consists only alphabet";
      else
        this.nameValidStatus = " ";
  }

  validateLocation(location) {
    if(location.length < 1 || location == null)
      this.locationValidStatus = "Enter the referee location";
    else 
      if(location.match(/^[a-zA-Z\s\.]*$/) == null)
        this.locationValidStatus = "Referee location consists only alphabet";
      else
        this.locationValidStatus = " ";
  }

  validateExperience(matches) {
    if(!matches) 
      this.experienceValidStatus = "Enter the number of matches";
    else 
      if(matches < 0) 
        this.experienceValidStatus = "Number of matches not less than 0";
      else
        this.experienceValidStatus = " ";
  }

  validateUrl(url) {
    if(url.length < 1 || url == null)
      this.imgurlValidStatus = "Enter the image url";
    else
      this.imgurlValidStatus = " ";
  }


}
