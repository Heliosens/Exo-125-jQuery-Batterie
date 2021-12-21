// get div with dataset
let elem = $('div[data-key]');

// listen click on div
elem.click(function (){
    // get dataset value
    let nbr = $(this).get(0).dataset.key;
    // play dataset sound = nbr
    $('audio[data-key='+ nbr + ']').get(0).play();
})

// get letter in kbd
let kbd = $('kbd');

let test = $('body');

test.keydown(function (event){
    // get key press
    let alpha = event.key.toUpperCase();

    kbd.each(function (){
        if($(this).text() === alpha){
            let nbr = $(this).parent().get(0).dataset.key;
            $('audio[data-key='+ nbr + ']').get(0).play();
        }
    })
})

let word = "QSDFGHJKL";

test.keydown(function (event){
    if(event.key === 'x'){
        console.log(event.key);
        goOne(word);
    }
})

function goOne (param){
    let i = 0;
    let autoPlay = setInterval(function (){
        if(i < 50){
            let l = Math.floor(Math.random() * param.length);
            kbd.each(function (){
                if($(this).text() === param[l]){
                    let nbr = $(this).parent().get(0).dataset.key;
                    $('audio[data-key='+ nbr + ']').get(0).play();
                }
            })
            i++;
        }
        else clearInterval(autoPlay);
    }, 200)
}
