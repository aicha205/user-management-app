import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from '../services/user.service';
import { userType } from '../types/users.type';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() 
  goToPage = new EventEmitter<number>();
  users: userType[] = [];

  constructor(private userService: UserService) { }
  public getAllUsers(page:Number):void{
    this.userService.getUsers(page).subscribe(user=>{
      console.log(user);
      this.users=user;
      

    });
  }
  onPageChanged(pageNumber: number) {
    // Implement your logic here when the page changes
    this.getAllUsers(pageNumber);
    // You can update your data or perform any other action here
  }
  ngOnInit() {
    this.getAllUsers(1);
  }
  deleteUser(userId: number) {
    // Call the user service method to delete the user
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Remove the deleted user from the local array
        this.users = this.users.filter(user => user.id !== userId);
      },
      error => {
        console.log('Error deleting user:', error);
      }
    );
  }
}
