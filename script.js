window.addEventListener('load', function() {

    $("#form").submit(function(e) {
        $('#cardNAsa').css('display', '')
        const dataLeitura = Object.fromEntries(new FormData(e.target).entries());
        $.get(`https://api.nasa.gov/planetary/apod?api_key=AhPeeOHbByxGgxb4Utxcm9HPRXLDdgc2igbihiMv&date=${dataLeitura.dataParaPesquisar}`, function(response){
            $('#titulo').html(response.title);
            $('#conteudo').html(response.explanation);
            $('#quemFez').html(response.copyright);
            if (response.media_type == 'image') {
                $("#imgOrVideo").append($('<img id="imgNasa" class="card-img-top">'));
                $("#imgNasa").attr("src", response.url);

            }else{
                var video = $('<video />', {
                    id: 'video',
                    src: response.media,
                    type: 'video/mp4',
                    controls: true
                });
                video.appendTo($('#imgOrVideo'));
            }
        },'json');
    });

})
