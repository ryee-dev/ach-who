import $ from 'jquery';

export class AchWho {
  constructor(parameters, showDocs) {
    this.first = parameters.first;
    this.last = parameters.last;
    this.specialty = parameters.specialty;
    this.query = parameters.query;
    this.sort = parameters.sort;
  }

  findDrs(showDocs) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.query}&sort=${this.sort}&skip=0&limit=10&user_key=` + process.env.exports.apiKey).then(function(response) {
        showDocs(response);
      }).fail(function(error) {
        $('#resultsFail').text('Error, please try again later.')
    });
  }
}
