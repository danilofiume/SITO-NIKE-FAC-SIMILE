document.addEventListener('DOMContentLoaded', function(){

     //immagini cambiano al mouseover e al click
    

     const dunkimgmini = document.getElementById('dunkimgmini');
     const immagindunk = document.querySelectorAll('.immaginidunk')
     const dunkbig = document.getElementById('dunkimgprincipale');
     
     
     function handleImageChange(event) {

        //crato un ciclo for per rimuovere l'opacity4 in modo tale che si leva dopo aver cliccato o mouseover
        for (let index = 0; index < immagindunk.length; index++) {
            const element = immagindunk[index];
            element.classList.remove('opacity4')
            
           }    
       
        // Verifica se l'elemento è un'immagine o un video
        if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') {
        // Imposta l'immagine grande con l'immagine o il video corrente
        dunkbig.innerHTML = '';
        const clone = event.target.cloneNode(true);
        dunkbig.appendChild(clone);
        

                    
        //ed in questo modo mettiamo opacity4 solo sul target
        event.target.classList.add('opacity4')
        }
             
           }

     dunkimgmini.addEventListener('mouseover', handleImageChange); 
     dunkimgmini.addEventListener('click', handleImageChange);     
     
     
 
 
 
 
  const boxcar = document.getElementById('boxcar')
  const addcar = document.getElementById('addcar')
  const closebox = document.getElementById('close')
  const buttonSize = document.querySelectorAll('.radio')
  const messageSizeSelect = document.getElementById('messageSizeSelect')
  const messageCarMax = document.getElementById('messageCarMax');
  const tagliaDunkScarpa = document.getElementById('tagliaDunkScarpa')
  const tagliaDunkScarpa2 = document.querySelectorAll('.tagliaDunkScarpa2')
  const viewCar = document.getElementById('viewCar')
  const numberArticleCar = document.getElementById('numberArticleCar');
  const boxcarrello = document.querySelectorAll('.boxcarrello')
  const carrello = document.getElementById('carrello')
  const deleteShoes = document.querySelectorAll('.ri-delete-bin-line')
  let subtotalpay = document.getElementById('subtotalpay')
  let totalpay = document.getElementById('totalpay')
  let totalSpesa = document.getElementById('total')
  let subtotalprimo = document.getElementById('subtotalprimo')
  let selectedSize = null;
  let element1 = null;
  let counterClick = 0;
  let totale = 0;



  




 //qui c'è la logica per selezionare una taglia alla volta, creando un queryselectorall della class radio e creando un for sull'array creato, dopodiche ho fatto un ciclo for per eliminare la clas selezionata in modo tale da cliccarla una alla volta  
 
 
 for (let index = 0; index < buttonSize.length; index++) {
     const element = buttonSize[index];
     element.addEventListener('click', function () {
         // Rimuovi la classe 'selezionata' da tutti i pulsanti radio
         for (let i = 0; i < buttonSize.length; i++) {
             if (i !== index) {
                 buttonSize[i].classList.remove('selezionata');
             }
         }
 
         // Aggiungi la classe 'selezionata' solo al pulsante radio cliccato
         element.classList.add('selezionata');
 
         selectedSize = element.value;
         element1 = element
     });
 
 }
 
 //qui e riferito alla x nel box che si apre all'aggiunta al carrello, dove vado a rimuovere vari class , e ritornare il counter click a 0
 closebox.addEventListener('click', function(){
     
     boxcar.classList.add('none')
     element1.classList.remove('selezionata');
     messageCarMax.classList.add('none')
     counterClick = 0
 
     
     //per assegnare null la seleziona in modo tale da far ripartire l'if nell ' addeventlistenere addcar
     selectedSize = null;
         
     
 
 })
 
 



 addcar.addEventListener('click', function () {
     // Verifica se è stata selezionata una taglia prima di aggiungere al carrello
     if (selectedSize === null) {
         messageSizeSelect.classList.remove('none')
         
     } else {
 
             if(counterClick < 4){
             // Aggiungi al carrello
             // Aggiungi qui la logica per l'aggiunta al carrello

             carrello.classList.remove('none')
             boxcar.classList.remove('none')
             messageSizeSelect.classList.add('none')
             tagliaDunkScarpa.innerText = selectedSize
             counterClick++
             numberArticleCar.innerText = counterClick
 
             if(counterClick === 1) {
                 tagliaDunkScarpa2[0].innerHTML = selectedSize
              
             } 
             else if(counterClick === 2) {
                 tagliaDunkScarpa2[1].innerHTML = selectedSize
                
             } 
             else if(counterClick === 3) {
                 tagliaDunkScarpa2[2].innerHTML = selectedSize
                 
             } 
             else if(counterClick === 4) {
                 tagliaDunkScarpa2[3].innerHTML = selectedSize
                 
             }

 
             //prezzi e totali

             if (counterClick <= boxcarrello.length) {
                 //Quindi, supponendo che counterClick sia 1, boxCorrente sarà il primo elemento nell'array boxcarrello (dato che JavaScript usa indicizzazione a zero), se counterClick è 2, allora boxCorrente sarà il secondo elemento, e così via.
                const boxCorrente = boxcarrello[counterClick - 1];
 
                 //Sto ottenendo il valore dell'attributo data-price del box corrente nel carrello. L'attributo data-price dovrebbe contenere il prezzo associato a quella specifica scarpa o elemento. La funzione getAttribute('data-price') restituirà il valore dell'attributo come una stringa.
                const prezzoCorrente = parseFloat(boxCorrente.getAttribute('data-price'));
         
                totale += prezzoCorrente;
 
                //per mettere solo i primi due numeri dopo la virgola
                const totaleFormattato = totale.toFixed(2);
                 
           
         
                 // Aggiorna il display del totale 
                 totalSpesa.innerText = totaleFormattato + '€';
                 totalpay.innerText = totaleFormattato + '€';
                 subtotalpay.innerText = totaleFormattato + '€';
                 subtotalprimo.innerText = totaleFormattato + '€';
             }  

             
        
            //per far salire lo schermo in alto
             document.documentElement.scrollTop = 0; 
 

            // Nascondi tutti i box
            boxcarrello.forEach(box => box.classList.add('none'));

            // Apri i box corrispondenti
            for (let i = 0; i < counterClick; i++) {
                boxcarrello[i].classList.remove('none');
            }
                        
             

            
             }
 
         else {
             messageCarMax.classList.remove('none')
         }
 
     } 
 
     
 
 })





 //qui sono andato a creare un ciclo for dove ho associato la lunghezza della node list dei cestini ad un indice, dopodicè ho apllicato un evento click su ognuno, e dicendo che ad ogni click si apre il boxcarrello conrrispondente poichè unito dallo stesso indice, poi ho aggiornato il numero piccolo nel box a destra che dimuisce al click su ogni icona

 for (let j = 0; j < deleteShoes.length; j++) {
    const element4 = deleteShoes[j];

    element4.addEventListener('click', function(){

        boxcarrello[j].classList.add('none');

        // Ottieni il prezzo dell'elemento corrente
        const prezzoCorrente2 = parseFloat(boxcarrello[j].getAttribute('data-price'));

        // Sottrai il prezzo corrente dal totale
        totale -= prezzoCorrente2;

        // Aggiorna il display del totale 
        const totaleFormattato2 = totale.toFixed(2);
        totalSpesa.innerText = totaleFormattato2 + '€';
        totalpay.innerText = totaleFormattato2 + '€';
        subtotalpay.innerText = totaleFormattato2 + '€';
        subtotalprimo.innerText = totaleFormattato2 + '€';

        


        // Aggiorna il numero di articoli nel carrello
        counterClick--
        numberArticleCar.innerText = counterClick;
        

        // Se il contatore è ora inferiore a 4, nascondi il messaggio di limite
        if (counterClick < 4) {
            messageCarMax.classList.add('none');
        }

        

    });           
}



//qui quando clicchiamo su visualizza carrello toglie la selezione sulla taglia, chiude il box e chiude il messaggio

 viewCar.addEventListener('click', function(){
     element1.classList.remove('selezionata');
     
     messageCarMax.classList.add('none')
     carrello.scrollIntoView({
        behavior: 'smooth'
    });
 })










 const payment = document.getElementById('payments')
 const payment2 = document.getElementById('payments2')
 const payment3 = document.getElementById('payments3')
 const gotopay = document.getElementById('gotopay')
 const savecountinue = document.getElementById('savecountinue')
 const continua = document.getElementById('continua')
 

 //funziona per levare il display none al click sui vari bottoni
 function displayblock(target, metodo) {
     target.addEventListener('click', function(){
         metodo.classList.remove('none')
     })
   }
 
displayblock(gotopay, payment)


 
gotopay.addEventListener('click', function(){
    payment.scrollIntoView({
        behavior: 'smooth'
    });
})




//per scegliere tra spedizione o ritiro
const delivery = document.querySelectorAll('.delivery')
const form2 = document.getElementById('form2')
const messageNodelivery = document.getElementById('messageNodelivery')


//qui abbiamo gestito l'invio del form che deve essere inviato solo se una delle due spedizioni e inviato, se una e scelta action passera alla fase successiva
for (let i = 0; i < delivery.length; i++) {
    delivery[i].addEventListener('click', function() {
        // Rimuovi la classe 'selected' da tutti i pulsanti
        for (let j = 0; j < delivery.length; j++) {
            delivery[j].style.border = '2px solid grey';
        }

        // Aggiungi la classe 'selected' solo al pulsante cliccato
        delivery[i].style.border = '2px solid black';

        // Modifica l'azione del modulo e visualizza/nascondi elementi in base alla selezione
        if (delivery[i].style.border === '2px solid black') {
            form2.action = "#payments2";
            
            displayblock(savecountinue, payment2);
        } 
      
    });
}

form2.addEventListener('submit', function(event) {
    // Verifica se almeno uno dei pulsanti di spedizione è selezionato
    let isDeliverySelected = false;
    for (let i = 0; i < delivery.length; i++) {
        if (delivery[i].style.border === '2px solid black') {
            isDeliverySelected = true;
            //provare ancora per vedere se si e risolto il bag random refresh
            document.documentElement.scrollTop = 20000; 
 
            break;
        }
    }

    // Se nessuno dei pulsanti di spedizione è selezionato, mostra il messaggio e impedisce l'invio del modulo
    if (!isDeliverySelected) {
        messageNodelivery.classList.remove('none');
        messageNodelivery.classList.add('red');

        //SI ANNULLA L'INVIO DEI DATI
        event.preventDefault();
    }
});

// Aggiungi un gestore di eventi al pulsante Salva e continua per nascondere il messaggio quando viene cliccato
savecountinue.addEventListener('click', function() {
    messageNodelivery.classList.add('none');
});







//qui siamo andati a verificare se i inumeri della carta erano tutti giusti doposiche abbiamo inviato il form alla fase successiva
 
const divpay3 = document.getElementById('divpay3')
const mespinerr = document.getElementById('mespinerr')
const myform = document.getElementById('myform')


continua.addEventListener('click', function(){
    const numeroCarta = document.getElementById('numerocarta');
    const numeroDataSc = document.getElementById('numerodatasc');
    const numeroCvc = document.getElementById('numerocvc');
    //questa serve a verificare se ci sono numeri
    const numeri = /\d+/;
    const numeroCartaValue = numeroCarta.value;
    const numeroDataScValue = numeroDataSc.value;
    const numeroCvcValue = numeroCvc.value;

    if ((numeroCartaValue.length === 16 && numeri.test(numeroCartaValue)) && (numeroDataScValue.length ===  4&& numeri.test(numeroDataScValue)) && (numeroCvcValue.length === 3 && numeri.test(numeroCvcValue))) {
       
        // la logica per andare avanti
        myform.action = "#payments3";
        //rimuove il display none
        displayblock(continua, payment3)
        divpay3.style.border = '1px solid black'
        mespinerr.classList.add('none')
     

    } else {

        // la logica per bloccare l'azione
        
        divpay3.style.border = '1px solid red'
        mespinerr.classList.remove('none')
        mespinerr.style.color = 'red'
        
        
    }
});












}) 










