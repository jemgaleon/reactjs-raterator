# Details

## Hierarchy Components

- App
    - RatingCard
        - InstructorSchoolRating
            - h2 instructorName
            - h3 collegeName
            - Rating
        - LikeCounter
            - button like
            - span count
        - ShowReviewsButton

## State and Props of Components

- App
    - vars
        - ratings[]
        - likes[]
        - schools[]
        - instructors[]
    - fn
        - aggregateRatings() {
            ratings[] {
                instructorSid,
                schoolSid,
                ratings[]
                likes
            }
        }
- RatingCard
    - state
        - likes
    - props
        - rating {
            instructorSid,
            schoolSid,
            ratings[],
            likes
        }
- InstructorPerformance
    - props
        - instructorSid
        - schoolSid
        - ratings[]
    - fn
        - getInstructorName()
        - getSchoolName
- Rating
    - props
        - ratings[]
    - fn
        - sumRatings() {
            Math.round(sum / total);
        }
- LikeCounter
    - props
        - likes
    - callbackFn
        - onClick() {
            state.likes++;
        }  