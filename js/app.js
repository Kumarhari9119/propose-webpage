window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const flash = document.getElementById("flash-screen");

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";

            flash.style.opacity = "1";

            setTimeout(function () {

                flash.style.opacity = "0";

                setTimeout(function () {

                    flash.style.display = "none";

                },1000);

            },3000);

        },800);

    },2500);

});








const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

if(playing){

music.pause();

playing=false;

}

else{

music.play();

playing=true;

}

}








// ==========================
// YES BUTTON
// ==========================

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", function () {

    // ❤️ Heart Explosion
    if (typeof heartExplosion === "function") {
        heartExplosion();
    }

    // 🎉 Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    // ❤️ Popup
    Swal.fire({

        title: "Yayyyy Banno ❤️",

        html: `
            <h2>Thank You For Saying YES! 🥹❤️</h2>
            <p>
                I'm really excited to spend
                a beautiful day with you.
            </p>
        `,

        icon: "success",

        confirmButtonText: "💖 OK, Let's Plan Our Date",

        confirmButtonColor: "#ff2e63",

        background: "#1b1b2f",

        color: "#ffffff",

        allowOutsideClick: false,

        allowEscapeKey: false

    }).then((result) => {

        if (result.isConfirmed) {

            const proposal = document.getElementById("proposal");

            const form = document.getElementById("dateSection");

            // Fade Out Proposal
            proposal.style.transition = "opacity .8s ease";

            proposal.style.opacity = "0";

            setTimeout(() => {

                proposal.style.display = "none";

                // Show Date Form
                form.style.display = "block";

                form.style.opacity = "0";

                form.style.transform = "translateY(60px)";

                setTimeout(() => {

                    form.style.transition = "all .8s ease";

                    form.style.opacity = "1";

                    form.style.transform = "translateY(0)";

                },100);

                form.scrollIntoView({

                    behavior:"smooth"

                });

            },800);

        }

    });

});



