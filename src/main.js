import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AchWho
} from './ach-who.js';

const showDocs = function showDocs(response) {
  let docArray = [];
  if (docArray.length > 0) {
    $.each(docArray, function(i) {
      docArray.push(docArray[i]);
    });
  } else {
    $('#resultsFail').text('Sorry, no doctors in that area.')
  }

  for (let i = 0; i < docArray.length; i++) {
    let doctor_fullname = docArray[i].profile.first_name + " " + docArray[i].profile.last_name;
    let doctor_bio = docArray[i].profile.bio;
    $('#resultsSuccess').append(' ' + '<li>' + '<div class="card">' +
    '<div class="card-body">' + '<div class="card-title">' + '<h3>' + doctor_fullname + '</h3>' + '</div>' + '<hr>' + '<p class="card-text">' + doctor_bio + '</p>' + '</div>' + '</div>' + '</li>');
  }
};

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    let query = $("#keyword-search").val();
    let sort = $("#sortBy").val();
    let docRequest = new AchWho(query, sort);
    docRequest.findDrs(query, sort, showDocs);
    $(".showResults").show();
  });
});
