import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
        <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card mx-4">
              <div class="card-body p-4">
                <form>
                  <h1>Register (to be implemented)</h1>
                  <p class="text-muted">Create your account</p>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email" autocomplete="email" required/>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="icon-lock"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" autocomplete="new-password" required/>
                  </div>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="icon-lock"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="Repeat password" autocomplete="new-password" required/>
                  </div>
                  <button type="button" class="btn btn-block btn-success">Create Account</button>
                </form>
              </div>
              <div class="card-footer p-4">
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
