import $ from 'jquery';
import { showDocs } from './display-doctors.js'

export class AchWho {
  constructor(parameters, showDocs) {
    this.first = parameters.first;
    this.last = parameters.last;
    this.specialty = parameters.specialty;
    this.query = parameters.query;
    this.state = parameters.state;
  }

  findDrs(showDocs) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${this.first}&last_name=${this.last}&query=${this.query}&specialty_uid=${this.specialty}&location=${this.state}&sort=best-match-desc&skip=0&limit=20&user_key=` + process.env.exports.apiKey).then(function(response) {
        showDocs(response);
      }).fail(function(error) {
        $('#resultsFail').text('Error, please try again later.')
    });
  }
}
