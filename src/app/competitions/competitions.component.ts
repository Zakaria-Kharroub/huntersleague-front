import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Competition, CompetitionService } from "../services/competition.service";
import { PageResponse } from "../services/user.service";
import { Router } from "@angular/router";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CdkDragPlaceholder],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})
export class CompetitionsComponent implements OnInit {
  competitionForm: FormGroup;
  competitions: Competition[] = [];
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;
  loading = false;
  error: string | null = null;

  constructor(
    private competitionService: CompetitionService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.competitionForm = this.fb.group({
      code: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      speciesType: ['', Validators.required],
      minParticipants: [0, [Validators.required, Validators.min(1)]],
      maxParticipants: [0, [Validators.required, Validators.min(1)]],
      openRegistration: [false, Validators.required]
    });
  }

  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.loading = true;
    this.error = null;

    this.competitionService.getAllCompetitions(this.currentPage, this.pageSize).subscribe({
      next: (response: PageResponse<Competition>) => {
        this.competitions = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur de chargement des compétitions';
        this.loading = false;
        console.error(err);
      }
    });
  }

  onSubmit() {
    if (this.competitionForm.valid) {
      const formValue = this.competitionForm.value;
      // Convert string to boolean for openRegistration
      formValue.openRegistration = formValue.openRegistration === 'true';

      this.competitionService.createCompetition(formValue).subscribe({
        next: (response) => {
          this.loadCompetitions(); // Refresh the list
          // Close modal using Bootstrap
          const modal = document.getElementById('addCompetitionModal');
          if (modal) {
            const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
            if (bootstrapModal) {
              bootstrapModal.hide();
            }
          }
          this.competitionForm.reset(); // Reset the form
        },
        error: (error) => {
          console.error('Failed to create competition', error);
          this.error = 'Erreur lors de la création de la compétition';
        }
      });
    }
  }
}
