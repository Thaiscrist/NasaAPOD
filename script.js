window.addEventListener('load', function() {

    $("#form").submit(function(e) {
        $('#cardNAsa').css('display', '')
        const dataLeitura = Object.fromEntries(new FormData(e.target).entries());

        $.get('https://api.nasa.gov/planetary/apod?api_key=AhPeeOHbByxGgxb4Utxcm9HPRXLDdgc2igbihiMv',function(dataLeitura){
            $('#titulo').html(dataLeitura.title);
            $('#conteudo').html(dataLeitura.explanation);
            $('#quemFez').html(dataLeitura.copyright);
            if (dataLeitura.media_type == 'image') {
                $("#imgOrVideo").append($('<img id="imgNasa" class="card-img-top">'));
                $("#imgNasa").attr("src", dataLeitura.url);

            }else{
                var video = $('<video />', {
                    id: 'video',
                    src: dataLeitura.media,
                    type: 'video/mp4',
                    controls: true
                });
                video.appendTo($('#imgOrVideo'));
            }
        },'json');
    });

})
