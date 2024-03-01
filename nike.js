document.addEventListener('DOMContentLoaded', function(){

    
    
    const sliderMessage = document.querySelectorAll('.slidermessage')
    let i = 0;
    
    const sliderMessageInterval = setInterval(function () {
        
        
        
        for (let index = 0; index < sliderMessage.length; index++) {
            const element = sliderMessage[index];

            if (index === i) {
                element.classList.remove('none');
            } else {
                element.classList.add('none');
            }
        }

        // i + 1: Incrementa il valore di i di uno.
        // % sliderMessages.length: Calcola il resto della divisione del risultato per la lunghezza dell'array sliderMessages.
        // Questo è spesso utilizzato per creare un ciclo che torna al primo elemento quando l'indice raggiunge l'ultima posizione dell'array e viceversa.

        // Quando i raggiunge l'ultimo elemento nell'array (sliderMessages.length - 1), il resto della divisione per la lunghezza dell'array (% sliderMessages.length) sarà zero, il che farà tornare i al primo elemento dell'array. 

        i = (i + 1) % sliderMessage.length;
        

    }, 2000);






//slider immagini

//qui siamo andati a dare una variabile ai due tasti   
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
//qui siamo andati a prendere tutti i container in una node list
const containerShoes = document.querySelectorAll('.containerShoes');
//qui a richiamare in una var la lunghezza della nodeList
const totalBoxes = containerShoes.length;
//qui creiamo una variabile d appoggio
let currentIndex = 0;


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


//Questo è il cuore della funzione updateSlider. Utilizzando un ciclo for, si scorrono tutti gli elementi containerShoes. Per ogni elemento, si controlla se l'indice i è compreso tra currentIndex e currentIndex + 3 (escluso). Se è vero, l'elemento viene reso visibile settando display a 'block', altrimenti viene nascosto settando display a 'none'. In pratica, questo assicura che siano visibili solo gli elementi che rientrano nel range specificato, garantendo che siano sempre visibili solo tre box alla volta. Quando currentIndex viene incrementato o decrementato tramite le funzioni nextSlide e prevSlide, il ciclo for verrà eseguito di nuovo con i nuovi valori di currentIndex, aggiornando di conseguenza quali elementi sono visibili e quali no.
function updateSlider() {
    for (let i = 0; i < totalBoxes; i++) {
        const slide = containerShoes[i];
        if (i >= currentIndex && i < currentIndex + 3) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    }
}


//nextSlide è chiamata quando viene cliccato il pulsante "Next". Verifica se ci sono ancora almeno 3 box a destra dell'indice corrente prima di incrementare currentIndex. Se la condizione è soddisfatta, chiama updateSlider().
function nextSlide() {
    if (currentIndex < totalBoxes - 3) {
        currentIndex++;
        updateSlider();
        updateButtonStyles();
    }
}

//prevSlide è chiamata quando viene cliccato il pulsante "Previous". Verifica se ci sono ancora almeno 3 box a sinistra dell'indice corrente prima di decrementare currentIndex. Se la condizione è soddisfatta, chiama updateSlider().
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        updateButtonStyles();
    }
}

function updateButtonStyles() {
    nextButton.style.color = currentIndex >= totalBoxes - 3 ? 'rgb(143,143,143)' : '';
    prevButton.style.color = currentIndex <= 0 ? 'rgb(143,143,143)' : '';
}



//slider sport

const nextButton1 = document.getElementById('nextBtn1');
const prevButton1 = document.getElementById('prevBtn1');
const containerSport = document.querySelectorAll('.containerSport');
const totalBoxes1 = containerSport.length;

let currentIndex1 = 0;

nextButton1.addEventListener('click', nextSlide1);
prevButton1.addEventListener('click', prevSlide1);



function updateSlider1() {
    for (let j = 0; j < totalBoxes1; j++) {
        const slide = containerSport[j];
        if (j >= currentIndex1 && j < currentIndex1 + 3) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    }
}


function nextSlide1() {
    if (currentIndex1 < totalBoxes1 - 3) {
        currentIndex1++;
        updateSlider1();
        updateButtonStyles1();
    }
}


function prevSlide1() {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSlider1();
        updateButtonStyles1();
    }
}

function updateButtonStyles1() {
    nextButton1.style.color = currentIndex1 >= totalBoxes1 - 3 ? 'rgb(143,143,143)' : '';
    prevButton1.style.color = currentIndex1 <= 0 ? 'rgb(143,143,143)' : '';
}




//slider member

const nextButton2 = document.getElementById('nextBtn2');
const prevButton2 = document.getElementById('prevBtn2');
const containerMember = document.querySelectorAll('.containerMember');
const totalBoxes2 = containerMember.length;

let currentIndex2 = 0;

nextButton2.addEventListener('click', nextSlide2);
prevButton2.addEventListener('click', prevSlide2);

function nextSlide2() {
    if (currentIndex2 < totalBoxes2 - 3) {
        currentIndex2++;
        updateSlider2();
        updateButtonStyles2();
    }
}

function prevSlide2() {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateSlider2();
        updateButtonStyles2();
    }
}

function updateSlider2() {
    for (let jj = 0; jj < totalBoxes2; jj++) {
        const slide = containerMember[jj];
        if (jj >= currentIndex2 && jj < currentIndex2 + 3) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    }
}

function updateButtonStyles2() {
    nextButton2.style.color = currentIndex2 >= totalBoxes2 - 3 ? 'rgb(143,143,143)' : '';
    prevButton2.style.color = currentIndex2 <= 0 ? 'rgb(143,143,143)' : '';
}


    
})