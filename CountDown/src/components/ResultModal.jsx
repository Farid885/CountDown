import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time is <strong>{targetTime} seconds.</strong>
      </p>
      <p>You stopped time <strong> X seconds left</strong></p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
