import './styles.css';
import $ from 'jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css'
import { AchWho } from './ach-who.js';
import { showDocs } from './display-doctors.js'

$(document).ready(function() {

  let parameters = {
    'first': '',
    'last': '',
    'specialty': '',
    'query': '',
    'sort': '',
    'state': ''
  };

  // 'Navigation' Functions

  $("#condition-butt").click(function(event) {
    event.preventDefault();
    $("#search-by").hide();
    $("#doctor-form").hide();
    $("#condition-form").fadeToggle('slow');
  });

  $("#doctor-butt").click(function(event) {
    event.preventDefault();
    $("#search-by").hide();
    $("#condition-form").hide();
    $("#doctor-form").fadeIn('slow');
  });

  $("#home-butt1").click(function(event) {
    event.preventDefault();
    $("#search-by").fadeIn('slow');
    $("#condition-form").hide();
  });

  $("#home-butt2").click(function(event) {
    event.preventDefault();
    $("#search-by").fadeIn('slow');
    $("#doctor-form").hide();
  });

  // Doc Ready

  $("#doctor-form").submit(function(event) {
    event.preventDefault()
    parameters.first = $("#first-name").val();
    parameters.last = $("#last-name").val();
    parameters.specialty = $("#specialty").val();
    parameters.query = $("#keyword-search").val();
    parameters.state = $("#state").val();
    parameters.sort = $("#sortBy").val();
    let docRequest = new AchWho(parameters, showDocs);
    docRequest.findDrs(showDocs);
    $(".showResults").show();
  });
});
