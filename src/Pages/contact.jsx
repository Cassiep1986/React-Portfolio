function Contact () {
    return (
      <>
          <h1>Contact Me</h1>
<form className="row g-3 was-validated">
  <div className="col md-6">
  <label htmlFor="validationTextarea" className="form-label">First Name</label>
    <input type="text" className="form-control is-invalid" placeholder="Field Required" required aria-label="First name"/>
  </div>
  <div className="col md-6">
  <label htmlFor="validationTextarea" className="form-label">Last Name</label>
    <input type="text" className="form-control is-invalid" placeholder="Field Required" required aria-label="Last name"/>
  </div>
  <div className="col-12">
  <label htmlFor="validationTextarea" className="form-label">Email</label>
  <input type="email" className="form-control is-invalid" placeholder="Field Required" required aria-label="Email"/>

  </div>
  <div className="mb-3">
    <label htmlFor="validationTextarea" className="form-label">Message</label>
    <textarea className="form-control is-invalid" id="validationMessage" placeholder="Field Required" required></textarea>
    <div className="col-12 mt-5">
    <button className="btn btn-info" type="submit">Submit form</button>
  </div>
  </div>
</form>

   
     </> 
    )

}

export default Contact;