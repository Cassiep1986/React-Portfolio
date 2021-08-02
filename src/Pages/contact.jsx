function Contact () {
    return (
      <>
          <h1>Contact Me</h1>
<form className="row g-3 was-validated">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"></input>
  </div>
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Textarea</label>
    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div className="invalid-tooltip">
      Please enter a message in the textarea.
    </div>
    <div className="col-12 mt-5">
    <button className="btn btn-info" type="submit">Submit form</button>
  </div>
  </div>
</form>
   
     </> 
    )

}

export default Contact;