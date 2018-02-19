$('.add-favorite').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/pokemon',
    data: {name: $(this).attr('data-pokemon') }
  }).done(function() {
    window.location = '/pokemon';
  });
});

$('.delete-favorite').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'DELETE',
    url: '/pokemon',
    data: { name: $(this).attr('data-pokemon')}
  }).done(function() {
    console.log('it is destroyed');
    window.location = '/pokemon';
  });
});

$('#search-btn').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'GET',
    url: '/pokemon/' + $('#search-field').val()
  }).done(function() {
    window.location = '/pokemon/' + $('#search-field').val();
  });
});
