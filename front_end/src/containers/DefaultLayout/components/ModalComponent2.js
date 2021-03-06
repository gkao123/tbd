//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalBody, Col, Form, FormGroup, Label, Input } from 'reactstrap';


export default class ModalComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.api_URL = 'test';
    this.state = { 
      modal: false, 
      type: 'info',
      message: '',
      title: '',
      location: '',
      description: '',
      contactInfo: ''
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }
  handleDescriptionChange(event){
    this.setState({description: event.target.value});
  }
  handleContactInfoChange(event){
    this.setState({contactInfo: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending...' }, this.submitForm);
    this.toggle();
    this.setState({ type: 'info', message: '' });
  }

  submitForm(){
    var component = this;
    fetch(this.api_URL,{
      method: 'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        contactInfo: this.state.contactInfo
      })
    }).then(function loaded(){
      
    })
  }
    //  <button onClick={this.toggle}><i class="fas fa-plus-circle"></i></button>

  render() {
    if (this.state.message && this.state.type) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
        <div>
          <button class = "btn" onClick={this.toggle}><i className="fa fa-plus fa-lg mt-4"></i></button>
          <Modal isOpen={this.state.modal}>
            <ModalBody>
            <Form onSubmit = {e => this.handleSubmit(e)}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" value= {this.state.title} onChange = {e => this.handleTitleChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input type="text" value={this.state.location} onChange = {e => this.handleLocationChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" value={this.state.description} onChange = {e => this.handleDescriptionChange(e)} placeholder = "List any additional details you think would be helpful for any fulfillers." style={{height: '150px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info (optional)</Label>
              <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email/phone number/facebook profile/etc." />
            </FormGroup>
            <div class="btn-toolbar" role="group" aria-label="Basic example">
              <div class="btn-group mr-2" role="group" aria-label="First group"> <Button>Submit</Button> </div>
              <div class="btn-group mr-2" role="group" aria-label="First group"> <Button onClick={this.toggle}> Close </Button> </div>
            {status}
            </div>
          </Form>
            </ModalBody>
          </Modal>
        </div>
      
    );
  }
}