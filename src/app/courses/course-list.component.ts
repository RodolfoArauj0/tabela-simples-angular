import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.09,
                code: 'XPS-8973',
                duration: 120,
                rating: 4.4,
                releaseDate: 'Dec de 2010'
            },
            {
                id: 2,
                name: 'Matemática avançada',
                imageUrl: './assets/images/http.png',
                price: 79.09,
                code: 'XPS-3373',
                duration: 90,
                rating: 3.5,
                releaseDate: 'Jan de 2012'
            },
            {
                id: 3,
                name: 'Basico ao avançado CLI Angular',
                imageUrl: './assets/images/cli.png',
                price: 79.09,
                code: 'XOS-8932',
                duration: 80.80,
                rating: 4,
                releaseDate: 'Jan de 2012'
            }
        ]
    }

}