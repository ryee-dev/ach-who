import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AchWho
} from './ach-who.js';

const showDocs = function(response) {
  // check if input field is populated
  if (response.data.length == 0) {
    $('#resultsFail').text('Sorry, no doctors in that area.')
  } else {
    for (let i = 0; i < response.data.length; i++) {
      let doctor_fullname = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
      let doctor_bio = response.data[i].profile.bio;
      $('#resultsSuccess').append(' ' + '<li>' + '<div class="card">' +
      '<div class="card-body">' + '<div class="card-title">' + '<h3>' + doctor_fullname + '</h3>' + '</div>' + '<hr>' + '<p class="card-text">' + doctor_bio + '</p>' + '</div>' + '</div>' + '</li>');
    }
  }
}

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();


    const query = $("#keyword-search").val();
    const sort = $("#sortBy").val();

    let docRequest = new AchWho(query, sort);

    docRequest.findDrs(query, sort, showDocs);
    // $(".showResults").empty();
    $(".showResults").show();
  });
});
