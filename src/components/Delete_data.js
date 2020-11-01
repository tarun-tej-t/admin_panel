import React, { Component } from 'react';
import $ from 'jquery';


class Delete_data extends Component {


    componentDidMount() {
        /*Dropdown Menu*/
    $('.dropdown1').click(function () {
      $(this).attr('tabindex', 1).focus();
      $(this).toggleClass('active');
      $(this).find('.dropdown-menu1').slideToggle(300);
    });
    $('.dropdown1').focusout(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu1').slideUp(300);
    });
    $('.dropdown1 .dropdown-menu1 li').click(function () {
      $(this).parents('.dropdown1').find('span').text($(this).text());
      $(this).parents('.dropdown1').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/
    
    
    $('.dropdown-menu1 li').click(function () {
    var input1 = '<strong>' + $(this).parents('.dropdown1').find('input').val() + '</strong>',
    msg1 = '<span class="msg">Hidden input value: ';
    $('.msg1').html(msg1 + input1 + '</span>');
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
        alert('Your request was submitted for adding of data for " '+this.state.value + ' "');
        event.preventDefault();
      }
      


  render() {
    return (
      <div>  <div class="delete">
      <label> <br/>
                 Requested Data:
            </label><br/>
            <textarea  placeholder="content..." /><br/><br/>
            <hr/><br/>
          <form onSubmit={this.handleSubmit}>
          <big>Delete Data <br/></big>
                <small> <small> (Request Form)</small></small>
                <hr/>
                <label > <br/>
                 Data: 
                 <div class="container1">
                   <span class="choose1">Choose</span>
    
                 <div class="dropdown1">
                    <div class="select1">
                        <span>Select</span>
                        <i class="fa fa-chevron-left"></i>
                      </div>
                      <input type="hidden" name="gender"/>
                      <ul class="dropdown-menu1">
                        <li id="Event">Event</li>
                        <li id="Workshop">Workshop</li>
                        <li id="Other">Other</li>
                      </ul>
                    </div>
    
                 <span class="msg1"></span>
              </div>
           
    </label>
            <label> <br/>
                 Title:<br/>
                 <input value={this.state.value} onChange={this.handleChange} type="text" name="name" />
            </label><br/><br/>
            
           
                <input type="submit" value="Delete Data" />
            </form>
         <br/><br/><hr/><br/>
      </div> </div>
    );
  }
}

export default Delete_data;
