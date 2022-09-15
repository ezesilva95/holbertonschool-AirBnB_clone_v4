$(document).ready(function () {
  const amenity_dict = {};
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
    if (res.status === 'OK') {
      $('div#api_status').addClass('available');
      $('#api_status').css('background-color', '#FF545F');
    } else {
      $('div#api_status').removeClass('available');
      $('#api_status').css('background-color', '#CCCCCC');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (const place of data) {
        const data_place = `<article>
                            <div class="title_box">
                              <h2>${place.name}</h2>
                                <div class="price_by_night">$${place.price_by_night}</div>
                            </div>
                        <div class="information">
                        <div class="max_guest">${place.max_guest} Guests</div>
                                     <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                   <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                              </div>
                            <div class="description">${place.description}</div>
                       </article>`;
        $('section.places').append(data_place);
      }
    }
  });
});
