import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MovieFormService } from '../service/movie-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    DatePickerModule,
    RatingModule,
    InputNumberModule,
    ButtonModule,
  ],
  providers: [DatePipe],
  standalone: true,
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent implements OnInit {
  form: FormGroup = {} as FormGroup;

  constructor(
    public movieFormService: MovieFormService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      imdb_id: [''],
      launch_date: [''],
      review_stars: [''],
      duration: [''],
      views: [''],
    });
    this.formatForm();
  }

  submit() {
    this.multiplieStars();
    this.getDurationInMinuteForm();
    this.sendForm();
  }

  formatForm() {
    this.route.params.subscribe((res) => {
      const date = new Date(
        res['launch_date'] ? res['launch_date'] : new Date()
      );

      this.form.patchValue(res);
      this.form.get('launch_date')?.setValue(date);
    });
  }

  sendForm() {
    this.movieFormService
      .saveMovie(this.form.getRawValue())
      .subscribe((res) => {
        console.log(this.form);
        console.log(res);
      });
  }

  multiplieStars() {
    const stars = this.form.get('review_stars')?.value;
    this.form.get('review_stars')?.setValue(stars * 10);
  }

  getDurationInMinuteForm() {
    const duration = this.form.get('duration')?.value;
    this.form.get('duration')?.setValue(duration * 60);
  }
}
