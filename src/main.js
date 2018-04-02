import './styles.css';
import $ from 'jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.js';
import {
  AchWho
} from './ach-who.js';
import {
  showDocs
} from './display-doctors.js';

$(document).ready(function() {

  let parameters = {
    'first': '',
    'last': '',
    'specialty': '',
    'query': '',
    'sort': '',
    'state': ''
  };

  // Doc Ready

  $("#condition-form").submit(function(event) {
    event.preventDefault();
    let condition = $("#condition-name").val();
    let docRequest = new AchWho(condition);

    docRequest.findbyCondition(condition);
    $("#resultsFail").empty();
    $("#resultsSuccess").empty();
    $(".showResults").show();
  });

  $("#doctor-form").submit(function(event) {
    event.preventDefault();
    parameters.first = $("#first-name").val();
    parameters.last = $("#last-name").val();
    parameters.specialty = $("#specialty").val();
    parameters.query = $("#keyword-search").val();
    parameters.state = $("#state").val();
    parameters.sort = $("#sortBy").val();
    let docRequest = new AchWho(parameters, showDocs);

    docRequest.findDrs(showDocs);
    $("#resultsFail").empty();
    $("#resultsSuccess").empty();
    $(".showResults").show();
  });
});
