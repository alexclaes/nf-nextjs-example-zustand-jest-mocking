import { useState } from "react";

export default function Pagination() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <h2>Step {currentStep + 1}</h2>

      {currentStep > 0 && (
        <button
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
        >
          prev
        </button>
      )}
      {currentStep < 2 && (
        <button
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
}
