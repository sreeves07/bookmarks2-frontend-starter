import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
    const { title, rating, reviewer, content} = review
    const [viewEditForm, toggleEditForm] = useState(false);
    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };
    return (
    <div className="Review">
        
        {viewEditForm ? ( <ReviewForm 
        reviewDetails={review}
        toggleView={toggleView}
        handleSubmit={handleSubmit} />
        ) : (
        <div>
            <h4>
                {title} <span>{rating}</span>
            </h4>
            <h5>{reviewer}</h5>
            <p>{content}</p>
            <button onClick={() => handleDelete(review.id)}>delete</button>
        </div>
        )}
        <button onClick={toggleView}>edit this review</button>
    </div>
    )
};
  
export default Review;