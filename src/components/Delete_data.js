import React, { Component } from 'react';
import $ from 'jquery';
import './Form.css'

class Delete_data extends Component {


    componentDidMount() {
        /*Dropdown Menu*/
    $('.dropdown').click(function () {
      $(this).attr('tabindex', 1).focus();
      $(this).toggleClass('active');
      $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
      $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/
    
    
    $('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
    }); 
      }
    
      constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your request was submitted');
        event.preventDefault();
      }
      


  render() {
    return (
      <div>  <div class="delete">
      <label> <br/>
                 Requested Data:
            </label><br/>
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="content..." /><br/><br/>
            <hr/><br/>
          <form onSubmit={this.handleSubmit}>
          <big>Delete Data <br/></big>
                <small> <small> (Request Form)</small></small>
                <hr/>
                <label > <br/>
                 Data: 
                 <div class="container">
                   <span class="choose">Choose</span>
    
                 <div class="dropdown">
                    <div class="select">
                        <span>Select</span>
                        <i class="fa fa-chevron-left"></i>
                      </div>
                      <input type="hidden" name="gender"/>
                      <ul class="dropdown-menu">
                        <li id="Event">Event</li>
                        <li id="Workshop">Workshop</li>
                        <li id="Other">Other</li>
                      </ul>
                    </div>
    
                 <span class="msg"></span>
              </div>
           
    </label>
            <label> <br/>
                 Title:<br/>
                 <input type="text" name="name" />
            </label><br/><br/>
            
           
                <input type="submit" value="Delete Data" />
            </form>
         <br/><br/><hr/><br/>
      </div> </div>
    );
  }
}

export default Delete_data;
