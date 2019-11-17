import React, { Component } from 'react';
import { Rating } from './Rating.js';
import { LikeCounter } from './LikeCounter.js';
import { ShowReviewsButton } from './ShowReviewsButton.js';
import { ButtonPanel } from './ButtonPanel.js';
import '../styles/RatingCard.css';

export class RatingCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: this.props.rating.Likes
        };

        this.handleLike = this.handleLike.bind(this);
        this.handleShowReviews = this.handleShowReviews.bind(this);
    }

    handleLike(e) {
        const likes = Number(this.state.likes) + 1;

        this.setState({
            likes
        });
    }

    handleShowReviews(e) {
        console.log(this.props.rating.reviews);
        alert('Nothing to show');
    }

    render() {
        const rating = this.props.rating;
        const ratings = rating.reviews.map(review => review.Rating);
        
        return (
            <div className="ratingCard">
                <Rating
                    instructor={rating.InstructorSid}
                    school={rating.SchoolSid}
                    ratings={ratings} />
                <ButtonPanel
                    left={
                        <LikeCounter
                            count={this.state.likes}
                            onClick={this.handleLike} />
                    }
                    right={
                        <ShowReviewsButton
                            onClick={this.handleShowReviews} />
                    } />
            </div>
        );
    }
}