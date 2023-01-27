$(document).ready(function () {
  const amenities = {};
  $("input[type='checkbox']").change(function () {
    if (this.checked) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let amenitiesList = '';
    for (const key in amenities) {
      amenitiesList += amenities[key] + ', ';
    }
    amenitiesList = amenitiesList.slice(0, -2);
    $('div.amenities h4').text(amenitiesList);
  });
});
