
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

const user = 
[

{
    name: "Angelo",
    avatar : "https://i.picsum.photos/id/960/200/300.jpg?hmac=lMLI27rQoFOVbWUEFQBILnVA_jFYw2b8KHACIGkDLD4",
    data: "07,20,1991",
    img : "https://i.picsum.photos/id/375/200/300.jpg?hmac=LBiwrXNHAfYU5B9rOkXkrH8iw8bSwUaHoV7Adk3I5s4",
    like : 89
},
{
    name: "Francesco",
    avatar : "https://i.picsum.photos/id/524/300/300.jpg?hmac=MpxUkv6gcBsbfdS64thmQBCSgpyfNIXq2Y8_Gx3SupA",
    data: "11,15,2002",
    img : "https://i.picsum.photos/id/478/200/300.jpg?hmac=9XTsWr649TEW4EJf8V09OflQrYWLvD63zeYkUNJ8Aq4",
    like : 52
},
{
    name: "Pino",
    avatar : "https://i.picsum.photos/id/423/200/300.jpg?hmac=Yb4FKqDYd2C1Lvx5F0BDwATeS4vxsllU9vPl228-BXQ",
    data: "12,24,2021",
    img : "https://i.picsum.photos/id/1040/200/300.jpg?hmac=Q4ntfv8HG_O9dfwjINSmS4oQUot0YUwT_6bezgKA3Jw",
    like : 31
}

];

const container = document.getElementById("container")

for (let i = 0; i < user.length; i++) {
    const element = user[i];

    container.innerHTML += 
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.avatar}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.name}</div>
                        <div class="post-meta__time">${element.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${element.img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.like}</b> persone
                    </div>
                </div> 
            </div>            
            
        </div>
        `
         const button = document.querySelectorAll(".js-like-button");
         console.log(button);
         for (let x = 0; x < button.length; x++) {
             const btn = button[x];
             console.log(btn);

             button[x].addEventListener("click", function (event) {
                     event.preventDefault()
                    console.log("ciao");
                    element.like += +1;
                
                     console.log(element.like);
                
                 }) 
         }
    
         
        }
        
        // const button = document.querySelector(".js-like-button");
        
        // button.addEventListener("click", function (event) {
            //     event.preventDefault()
            //    console.log("ciao");
            //    element.like += +1;
            
            //     console.log(element.like);
            
            // })
            
            // for (let i = 0; i < user.length; i++) {
                //     const element = user[i];
                //     const button = document.querySelector(".js-like-button");
                
                // button.addEventListener("click", function (event) {
                    //     event.preventDefault()
                    //    console.log("ciao");
                    //    element.like += +1;
                    
                    //     console.log(element.like);
                    
                    // })
                    // }


                    // button.addEventListener("click", function (event) {
                    //     event.preventDefault()
                    //    console.log("ciao");
                    //    element.like += +1;
                       
                    //     console.log(element.like);
                       
                    // })