import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/Rating.css';
import data from '../assets/data.json';

export class Rating extends Component {
    getInstructorName(id) {
        return dataInstructors.find(instructor => {
            return instructor.InstructorSid === id;
        }).Instructor;
    }

    getSchoolName(id) {
        return dataSchools.find(school => {
            return school.SchoolSid === id;
        }).Name;
    }

    computeMean(ratings) {
        const total = ratings.reduce((acc, currValue) => acc += Number(currValue));

        return Math.round(total / ratings.length);
    }

    render() {
        const instructorName = this.getInstructorName(this.props.instructor);
        const schoolName = this.getSchoolName(this.props.school);
        const starCount = this.computeMean(this.props.ratings);
        let stars = [];

        for (let count = 0; count < starCount; count++) {
            stars.push(
                <FontAwesomeIcon
                    key={count}
                    icon={faStar} />
            );
        };

        return (
            <div className="rating">
                <div className="ratingInfo">
                    <h2>{instructorName}</h2>
                    <h3>{schoolName}</h3>
                </div>
                <div className="stars flexContainer">
                    {stars}
                </div>
            </div>
        );
    }
}

// todo put somewhere
const dataSchools = data[0].Schools;
const dataInstructors = data[0].Instructors;