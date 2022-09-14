#!/usr/bin/node
// Script must be executed only when DOM is loaded
$( dcoument ).ready(function() {
    let data = {};
    $(document).on('change', "input[type='checkbox']", function() {
        if (this.checked) {
            data[$(this).data('id')] = $(this).data('name');
        } else {
            delete data[$(this).data('name')];
        }
        let amenitiesName = [];
        $.each(data, function(key, value) {
            amenitiesName.push(key);
        });
        if (amenitiesName.length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(data.join(', '));
        }
    });
});