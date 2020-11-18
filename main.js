
const app = {};
app.key = `8df96cc8f98d2758fec076b8ec18c6c2`;

app.poster = function (query) {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    dataType: 'json',
    data: {
      api_key: app.key,
      include_adult: false,
      include_video: false,
      query: query
    }
  }).then((response) => {
    $('.results').empty();
    $('input[type=text]').val(' ')
    app.displayPoster(response.results)
  })
};

app.displayPoster = function(data){
  data.forEach( function(poster) {
    if(poster.poster_path != null){
    const htmlToAppend = `
            <div class=".results">
              <p>${poster.original_title}</p>
                <div class="poster-image">
                     <img src="https://image.tmdb.org/t/p/w500/${poster.poster_path}" alt="${poster.original_tittle}" >
                 </div>
            </div>

            `
            $(".results").append(htmlToAppend);
            console.log(poster);
         } 
    });
}
      
app.init = function () {
  console.log('Created at Juno College')

  $('Form').on('submit', (e) => {
    e.preventDefault();
    let searchText = $('input').val();
    app.poster(searchText);
  });
}

$(function(){
    app.init();
})