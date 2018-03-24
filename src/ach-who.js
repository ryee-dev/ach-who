import $ from 'jquery';

export class AchWho {
  constructor(query, sort) {
    this.query = query;
    this.sort = sort;
  }

  findDrs(query, sort, showDocs) {

    const apiKey = process.env.exports.apiKey;

    console.log(apiKey);

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.query}&sort=${this.sort}&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
        showDocs(response);
      })
      .fail(function(error) {
        $('#resultsFail').text('Error, try again later.')
      });
  }
}
