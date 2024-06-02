import React, { useEffect, useState } from "react";
import "./AddReview.css";
import axios from "axios";

function AddReview() {

    const [name, setName] = useState(" ")
    const [text, setText] = useState(" ")
    const [reviews, setReviews] = useState(" ")
   
    const AddReview = async () =>{
        
        const response = await axios.post("/api/addReview", {
            name: name,
            text: text,
            reviews:reviews
        });

        alter(response?.data?.message)

        if (response?.data?.success) {
            alert(response?.data?.message);
            window.location.href = " ./review"
        }
    };

    

  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
           Feedback
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                   
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddReview;
