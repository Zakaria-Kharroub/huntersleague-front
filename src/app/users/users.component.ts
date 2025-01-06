import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User, PageResponse } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;

    this.userService.getAllUsers(this.currentPage, this.pageSize).subscribe({
      next: (response: PageResponse<User>) => {
        this.users = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'error de chargenemt users';
        this.loading = false;
        console.error(err);
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  deleteUser(userId: number) {
    if (confirm('sure bghity delete ce user ?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== userId);
          this.loadUsers();
        },
        error: (err) => {
          console.error('error delete user:', err);
          alert('error delete user');
        }
      });
    }
  }
}
