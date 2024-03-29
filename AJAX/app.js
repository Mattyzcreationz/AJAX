const termdata = $('#termdata');
const gifarea = $('#gif-location'); 

$('form').on('submit', async function(evt){
    evt.preventDefault();
    const consumersearch = termdata.val(); 
    termdata.val("");
    try {
        const gihpy = await axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                q: consumersearch,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
            }
        });
        creategif(gihpy.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
    }
});

function creategif(response){
    const urlGET = response.data.length;
    if(urlGET > 0 ){
        const floatindex = Math.floor(Math.random() * urlGET);
        const imgUrl = response.data[floatindex].images.original.url;
        const img = $("<img>", {
            src: imgUrl,
            class: 'w-100'
        });
        gifarea.append(img); 
    }
    $('#delete').on('click', function(){
        gifarea.empty();
    });
}
