import React, { Component } from 'react';
import { RatingCard } from './RatingCard.js';
import '../styles/Raterator.css';
import data from '../assets/data.json';

export class Raterator extends Component {
    aggregateRatings() {
        const ratings = dataRatings
            .map((ratings) => {
                ratings.key = ratings.InstructorSid + ratings.SchoolSid;
                return ratings;
            }, [])
            .reduce((ratings, currRating) => {
                const { key, InstructorSid, SchoolSid, Rating, Username, SubmittedOnUtc } = currRating;
                const Likes = dataLikes.find(like => {
                    return like.InstructorSid === InstructorSid
                }).Likes;
                let currIndex = -1;
                const existingRating = ratings.find((rating, index) => {
                    currIndex = index;

                    return (rating.key === (InstructorSid + SchoolSid))
                });
                const reviews = existingRating ?
                    existingRating.reviews :
                    [];

                reviews.push({
                    Rating,
                    Username,
                    SubmittedOnUtc
                });

                if (existingRating) {
                    ratings[currIndex].reviews = reviews;
                }
                else {
                    ratings.push({
                        key,
                        reviews,
                        InstructorSid,
                        SchoolSid,
                        Likes
                    });
                }

                return ratings;
            }, []);

        return ratings;
    }

    render() {
        const ratings = this.aggregateRatings();
        const ratingCards = ratings.map(rating =>
            <RatingCard
                key={rating.key}
                rating={rating} />
        );

        return (
            <div className="raterator">
                {ratingCards}
            </div>
        )
    }
}

// data
const dataLikes = data[0].Likes;
const dataRatings = data[0].Ratings;