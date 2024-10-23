export const Footer = () => {


  const submitText = () => {
    document.querySelector("#submit-text-form").requestSubmit();
  };

  return (
    <div className="footer">
      <div className="f-options">
        <select name="" id="" className="f-macro-select">
          <option value="apply-macro">Apply macro</option>
        </select>
        <button className="f-submit-ticket" onClick={submitText}>Submit as Pending</button>
      </div>
    </div>
  );
};
