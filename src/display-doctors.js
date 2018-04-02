import $ from 'jquery';

export function showDocs(response) {
  let docArray = [];
  if (response.data.length > 0) {
    $.each(response.data, function(i) {
      docArray.push(response.data[i]);
    });
    console.log(docArray);
  } else {
    $('#resultsFail').text('Sorry, no doctors in that area.');
  }

  for (let i = 0; i < docArray.length; i++) {
    let fullTitle = docArray[i].profile.first_name + " " + docArray[i].profile.last_name + " " + docArray[i].profile.title;
    let img = '<img src="' + docArray[i].profile.image_url + '">';
    let specialty = docArray[i].specialties[0].name + "</strong>";
    let phoneNum = docArray[i].practices[0].phones[0].number.match(/(\d{3})(?=\d{2,3})|\d+/g).join("-");
    let doctor_bio = docArray[i].profile.bio;


    $('#resultsSuccess').append(
      '<div class="card horizontal">' + img + '<br> <h1 class="display-4">' + fullTitle + '</h1> <p class="lead"> <strong>' + specialty + '</strong> <br>' + phoneNum + '<div class="card-content">' + '<hr>' + '<div class="card-content">' + doctor_bio + '</p>' + '</div> </div> </div>');
  }
}
