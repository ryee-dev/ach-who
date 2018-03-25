import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AchWho
} from './ach-who.js';

const showDocs = function showDocs(response) {
  let docArray = [];
  if (response.data.length > 0) {
    $.each(response.data, function(i) {
      docArray.push(response.data[i]);
    });
  } else {
    $('#resultsFail').text('<p>' + 'Sorry, no doctors in that area.' + '</p>');
  }

  for (let i = 0; i < docArray.length; i++) {
    let doctor_fullname = docArray[i].profile.first_name + " " + docArray[i].profile.last_name;
    let img = '<img src="' + docArray[i].profile.image_url + '">';
    let doctor_bio = docArray[i].profile.bio;
    $('#resultsSuccess').append(' ' + '<li>' + '<div class="card">' +
    '<div class="card-body">' + '<div class="card-title">' + '<h3>' + doctor_fullname + '</h3>' + '</div>' + '<hr>' + '<p class="card-text">' + doctor_bio + '</p>' + '</div>' + '</div>' + '</li>');
  }
};

$(document).ready(function() {

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

  $("#doctor-form").submit(function(event) {
    event.preventDefault();
    let parameters = {
      'first': '',
      'last': '',
      'specialty': '',
      'query': '',
      'sort': ''
    }

    let first = $("#first-name").val();
    let last = $("#last-name").val();
    let specialty = $("#specialty").val();
    let query = $("#keyword-search").val();
    let sort = $("#sortBy").val();
    let docRequest = new AchWho(query, sort);
    docRequest.findDrs(query, sort, showDocs);
    $(".showResults").show();
  });
});
