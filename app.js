// $('.key').eq(0).click(function (){
//     $('audio').get(1).play();
//
// })

// listen click on data truc get truc = bidul
// so play audio data truc = bidul

let elem = $('div[data-key]');
elem.click(function (){

    let nbr = $(this).get(0).dataset.key;
    console.log(nbr);
    $('audio[data-key='+ nbr + ']').get(0).play();
})

