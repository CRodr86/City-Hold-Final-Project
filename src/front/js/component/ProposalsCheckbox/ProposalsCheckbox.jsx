import React from "react";

const ProposalsCheckbox = () => {
  return (
    <div className="col-6">
      <div class="mb-3">
        <label className="form-label">Select a type</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckSuggestion"
          />
          <label className="form-check-label" for="flexCheckSuggestion">
            Suggestion
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckClaim"
          />
          <label className="form-check-label" for="flexCheckClaim">
            Claim
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProposalsCheckbox;
