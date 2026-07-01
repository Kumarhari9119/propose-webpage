








const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

document.getElementById("about").scrollIntoView({

behavior:"smooth"

});

});














const container =
document.getElementById("heart-container") ||
document.getElementById("hearts-container");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
3+Math.random()*5+"s";

heart.style.fontSize=
15+Math.random()*30+"px";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,400);





const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});














const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}











function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

5+Math.random()*5+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,900);






const message = `Dear Madhu ❤️

Every beautiful story begins with a simple hello.

I don't know what destiny has written for us,

but I know one thing...

I would love to spend a beautiful evening with you.

Would you go on a date with me? ❤️`;

let i = 0;
let typingStarted = false;

const typingElement = document.getElementById("typingText");

function typing(){

    if(i < message.length){

        typingElement.innerHTML += message.charAt(i);

        i++;

        setTimeout(typing,40);

    }

}

const letterSection = document.getElementById("letter");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(entry=>{

        if(entry.isIntersecting && !typingStarted){

            typingStarted = true;

            typing();

        }

    });

},{
    threshold:0.9

});

observer.observe(letterSection);







const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",function(){

    const x=Math.random()*(window.innerWidth-180);

    const y=Math.random()*(window.innerHeight-120);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

});

let noCount=0;

noBtn.addEventListener("mouseenter",function(){

    noCount++;

    const x=Math.random()*(window.innerWidth-180);

    const y=Math.random()*(window.innerHeight-120);

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

    if(noCount==5){

        alert("😂 Nice Try Banno...\nYou can't escape this button.");

    }

});




const thinkBtn=document.getElementById("thinkBtn");

thinkBtn.onclick=function(){

alert(

"😊 Take your time.\n\nNo pressure at all.\nI'll happily wait for your answer ❤️"

);

}











function heartExplosion() {

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        heart.style.zIndex = "99999";

        heart.style.pointerEvents = "none";

        heart.style.transition = "all 2s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translate(${Math.random()*400-200}px,-300px) scale(2)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}