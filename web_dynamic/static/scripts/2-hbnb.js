$(document).ready(function () {
  let amenity_dict = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenity_dict[$(this).data('id')] = $(this).data('name');
      $('div.amenities h4').text(Object.values(amenity_dict).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete amenity_dict[$(this).data('id')];
      $('div.amenities h4').text(Object.values(amenity_dict).join(', '));
    }
  });
  $.get('http://localhost:5001/api/v1/status/', function (res) {
    alert(res.status);
    if (res.status === 'OK') {
      $('div#api_status').addClass('available');
      $('#api_status').css('background-color', '#FF545F');
    } else {
      $('div#api_status').removeClass('available');
      $('#api_status').css('background-color', '#CCCCCC');
    }
  });
});
