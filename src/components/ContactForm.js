import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Want to stay Updated?</h1>
      <p>Enter Your email to keep notified!</p>
      <form>
        <div className="field">
          <label for="enter name">Name:</label>
          <input type="text" placeholder="Name" required />
        </div>
        <div className="field">
          <label for="enter email">Email:</label>
          <input
            type="email"
            placeholder="Enter valid Email Address"
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
