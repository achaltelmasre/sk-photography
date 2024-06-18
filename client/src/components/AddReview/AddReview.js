import React, {  useState } from "react";
import "./AddReview.css";
import axios from "axios";

function AddReview() {

   const [name, setName] = useState('')
    const [text, setText] = useState(" ")
    const [reviews, setReviews] = useState(" ")
   
    const AddReview = async () =>{
        
        const response = await axios.post("/api/addReview", {
            name: name,
            text: text,
            reviews:reviews
        });

        // alter(response?.data?.message)

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
          class="btn btn-danger addreview"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
           Give your Feedback 👈
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
                <h4 class="modal-title text-dark" id="staticBackdropLabel">
                Add our valuable Feedback
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                > </button>

              </div>
              <div class="modal-body">
<label className="text-dark h6 ">Name :</label>
              <input type="text" class="form-control"   
              placeholder="Enter your name..."
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              />
<label className="text-dark mt-3 h6">Rating on my work..</label>
<select class="form-control "
   value={text} 
   onChange={(e)=>{setText(e.target.value)}}>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>

<label className="text-dark mt-3 h6">Review :</label>
 <input type="text" class="form-control p-5"   
              placeholder="Give me your valuable feedfack on my work....."
              value={reviews}
              onChange={(e)=>{setReviews(e.target.value)}}
              />

              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn bg-warning text-dark" onClick={AddReview}>
                   Submit
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
