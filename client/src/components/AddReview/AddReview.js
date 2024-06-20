import React, { useState } from "react";
import "./AddReview.css";
import axios from "axios";

function AddReview() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState("");

  const AddReview = async () => {
    if (!name || !text || !reviews) {
      alert("Please fill all fields");
      return;
    }

    const response = await axios.post("/api/addReview", {
      name: name,
      text: text,
      reviews: reviews,
    });

    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = "./review";
    } else {
      alert("Failed to submit the review. Please try again.");
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-danger addreview"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Give your Feedback 👈
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-dark" id="staticBackdropLabel">
                  Add your valuable Feedback
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label className="text-dark h6">Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="text-dark mt-3 h6">Rating on my work..</label>
                <select
                  className="form-control"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                >
                  <option value="">Select Rating</option>
                  <option value="1">none</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <label className="text-dark mt-3 h6">Review :</label>
                <textarea
                  className="form-control "
                  placeholder="Give me your valuable feedback on my work..."
                  value={reviews}
                  onChange={(e) => setReviews(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn bg-warning text-dark"
                  onClick={AddReview}
                >
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

export default AddReview
