//Commands from tutorial by iamshaunjp
//https://github.com/iamshaunjp
$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var list = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/list',
        data: list,
        success: function(){
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/list/' + item,
        success: function(){
          location.reload();
        }
      });
  });

});
