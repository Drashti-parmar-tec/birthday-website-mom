/* =========================================================
   MUMMY BIRTHDAY
   CINEMATIC EXPERIENCE
   BIRTHDAY.JS
========================================================= */


/* =========================================================
   SCENES
========================================================= */

const scenes = [
    document.getElementById("scene1"),
    document.getElementById("scene2"),
    document.getElementById("scene3"),
    document.getElementById("scene4"),
    document.getElementById("scene5"),
    document.getElementById("scene6"),
    document.getElementById("scene7"),
    document.getElementById("scene8"),
    document.getElementById("scene9")
];

let currentScene = 0;


/* =========================================================
   MUSIC
========================================================= */

const music = document.getElementById("birthdayMusic");

let musicStarted = false;

function startMusic() {

    if (musicStarted && !music.paused) {
        return;
    }

    music.volume = 0.75;

    const promise = music.play();

    if (promise !== undefined) {

        promise
            .then(() => {

                musicStarted = true;

                console.log(
                    "🎵 London Thumakda started"
                );

            })
            .catch(() => {

                console.log(
                    "Browser blocked autoplay. Music will start on first interaction."
                );

            });

    }

}


/* Try music when page loads */

window.addEventListener(
    "load",
    () => {

        startMusic();

    }
);


/* =========================================================
   FIRST INTERACTION MUSIC FALLBACK
========================================================= */

function firstInteraction() {

    startMusic();

    document.removeEventListener(
        "click",
        firstInteraction
    );

    document.removeEventListener(
        "touchstart",
        firstInteraction
    );

    document.removeEventListener(
        "keydown",
        firstInteraction
    );

}


document.addEventListener(
    "click",
    firstInteraction
);

document.addEventListener(
    "touchstart",
    firstInteraction
);

document.addEventListener(
    "keydown",
    firstInteraction
);


/* =========================================================
   SCENE TRANSITION
========================================================= */

function goToScene(number) {

    if (
        number < 0 ||
        number >= scenes.length
    ) {
        return;
    }

    const oldScene =
        scenes[currentScene];

    const newScene =
        scenes[number];

    if (oldScene === newScene) {
        return;
    }

    oldScene.classList.remove(
        "active"
    );

    setTimeout(() => {

        newScene.classList.add(
            "active"
        );

    }, 100);

    currentScene = number;

    startMusic();

}


/* =========================================================
   SCENE 1
   GIFT
========================================================= */

const gift =
    document.getElementById("gift");

let giftOpened = false;


gift.addEventListener(
    "click",
    () => {

        if (giftOpened) {
            return;
        }

        giftOpened = true;

        startMusic();


        const lid =
            document.querySelector(
                ".gift-lid"
            );

        const bow =
            document.querySelector(
                ".gift-bow"
            );

        const box =
            document.querySelector(
                ".gift-box"
            );


        lid.style.transform =
            "translateY(-55px) rotate(-8deg)";

        bow.style.transform =
            "translateX(-50%) translateY(-65px) scale(0.7)";

        box.style.transform =
            "translateY(12px)";


        createGiftParticles();


        setTimeout(() => {

            goToScene(1);

        }, 1100);

    }
);


/* =========================================================
   GIFT PARTICLES
========================================================= */

function createGiftParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    const symbols = [
        "❤️",
        "💗",
        "✨",
        "⭐",
        "🌸"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "absolute";

        particle.style.left =
            "50%";

        particle.style.top =
            "57%";

        particle.style.fontSize =
            12 +
            Math.random() * 25 +
            "px";

        particle.style.pointerEvents =
            "none";


        container.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() *
            350;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.3)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)
                        rotate(360deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1000 +
                    Math.random() * 800,

                easing:
                    "cubic-bezier(.15,.75,.3,1)"
            }
        );


        setTimeout(() => {

            particle.remove();

        }, 2000);

    }

}


/* =========================================================
   SCENE 2
   MUMMY REVEAL
========================================================= */

const scene2Next =
    document.getElementById(
        "scene2Next"
    );


scene2Next.addEventListener(
    "click",
    () => {

        goToScene(2);

    }
);


/* =========================================================
   SCENE 3
   MUMMY SUPERPOWERS
========================================================= */

const powerIcon =
    document.getElementById(
        "powerIcon"
    );

const powerTitle =
    document.getElementById(
        "powerTitle"
    );

const powerText =
    document.getElementById(
        "powerText"
    );

const powerNext =
    document.getElementById(
        "powerNext"
    );


const powers = [

    {
        icon: "🔎",

        title: "HUMAN GOOGLE",

        text:
            "She somehow knows where everything is — even the things we didn't know we lost."
    },

    {
        icon: "🍳",

        title: "CHIEF CHEF",

        text:
            "Somehow Mummy can turn random ingredients into something everyone wants to eat."
    },

    {
        icon: "📢",

        title: "PROFESSIONAL SCOLDER",

        text:
            "Sometimes one look is enough. No speech required. 😂"
    },

    {
        icon: "🧠",

        title: "CHIEF PROBLEM SOLVER",

        text:
            "Big problem, small problem, completely unnecessary problem — Mummy has a solution."
    },

    {
        icon: "❤️",

        title: "UNLIMITED LOVE",

        text:
            "After all our nonsense, Mummy still loves us. That's the strongest superpower of all."
    }

];


let powerIndex = 0;


function showPower(index) {

    const card =
        document.getElementById(
            "powerCard"
        );


    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px) scale(.95)";


    setTimeout(() => {

        powerIcon.textContent =
            powers[index].icon;

        powerTitle.textContent =
            powers[index].title;

        powerText.textContent =
            powers[index].text;


        card.style.opacity = "1";

        card.style.transform =
            "translateY(0) scale(1)";

    }, 300);

}


powerNext.addEventListener(
    "click",
    () => {

        powerIndex++;


        if (
            powerIndex <
            powers.length
        ) {

            showPower(
                powerIndex
            );

        }

        else {

            powerIndex = 0;

            goToScene(3);

        }

    }
);


/* =========================================================
   SCENE 4
   DANCE
========================================================= */

const danceButton =
    document.getElementById(
        "danceButton"
    );

const musicDisc =
    document.getElementById(
        "musicDisc"
    );


danceButton.addEventListener(
    "click",
    () => {

        startMusic();


        musicDisc.style.animation =
            "discSpin 1s linear infinite";


        danceButton.textContent =
            "LET'S GO! 💃";


        createDanceConfetti();


        setTimeout(() => {

            goToScene(4);

        }, 1500);

    }
);


/* =========================================================
   DANCE CONFETTI
========================================================= */

function createDanceConfetti() {

    const colors = [
        "#ff477e",
        "#ffd34e",
        "#7bdff2",
        "#8be28b",
        "#ffffff"
    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 +
            "vw";

        piece.style.top =
            "-20px";

        piece.style.width =
            "7px";

        piece.style.height =
            "14px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.zIndex =
            "1000";

        piece.style.pointerEvents =
            "none";


        document.body.appendChild(
            piece
        );


        const fallTime =
            1500 +
            Math.random() * 1800;


        piece.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(720deg)`
                }
            ],
            {
                duration:
                    fallTime,

                easing:
                    "linear"
            }
        );


        setTimeout(() => {

            piece.remove();

        }, fallTime);

    }

}


/* =========================================================
   SCENE 5
   CONTINUOUS MEMORIES
========================================================= */

const memoryImage =
    document.getElementById(
        "memoryImage"
    );

const memoryNumber =
    document.getElementById(
        "memoryNumber"
    );

const memoryCaption =
    document.getElementById(
        "memoryCaption"
    );

const memoryNext =
    document.getElementById(
        "memoryNext"
    );

const memoryPhoto =
    document.getElementById(
        "memoryPhoto"
    );


/*
   ==========================================================
   ADD ALL YOUR MEMORY PHOTOS HERE
   ==========================================================

   Just put your image files inside:

   media/

   Then add them below.

   Example:

   {
       photo: "media/photo-17.jpg",
       caption: "Our beautiful day together. ❤️"
   }

   You can have 10, 20, 50 or even 100 photos.
*/


const memories = [

    {
        photo: "media/photo-02.jpg",
        caption: "One beautiful memory. ❤️"
    },

    {
        photo: "media/photo-03.jpg",
        caption: "Family moments are the best moments."
    },

    {
        photo: "media/photo-04.jpg",
        caption: "Mummy looking absolutely fabulous. ✨"
    },

    {
        photo: "media/photo-05.jpg",
        caption: "Another memory we will always keep."
    },

    {
        photo: "media/photo-06.jpg",
        caption: "A smile that makes everything better. ❤️"
    },

    {
        photo: "media/photo-07.jpg",
        caption: "And then there are the crazy memories. 😂"
    },

    {
        photo: "media/photo-13.jpg",
        caption: "More smiles. More memories."
    },

    {
        photo: "media/photo-14.jpg",
        caption: "Mummy being Mummy. ❤️"
    },

    {
        photo: "media/photo-15.jpg",
        caption: "Another little piece of our story."
    },

    {
        photo: "media/photo-16.jpg",
        caption: "Good times. Great people."
    },

    /*
       ADD YOUR NEW PHOTOS BELOW
    */

    {
        photo: "media/photo-17.jpg",
        caption: "Another beautiful chapter of our story. ❤️"
    },

    {
        photo: "media/photo-18.jpg",
        caption: "A moment worth remembering forever. ✨"
    },

    {
        photo: "media/photo-19.jpg",
        caption: "Beautiful memories with the most beautiful Mummy. ❤️"
    },

    {
        photo: "media/photo-20.jpg",
        caption: "Another smile we never want to forget. 😊"
    },

    {
        photo: "media/photo-21.jpg",
        caption: "One more memory for our little collection. ❤️"
    }

];


let memoryIndex = 0;


/*
   Time between automatic memories.

   4000 = 4 seconds

   If you want slower:
   5000

   If you want faster:
   3000
*/

const MEMORY_DURATION = 4000;


/*
   Timer for automatic slideshow.
*/

let memoryTimer = null;


/*
   Prevents multiple transitions
   happening at exactly the same time.
*/

let memoryChanging = false;


/* =========================================================
   SHOW MEMORY
========================================================= */

function showMemory(
    index,
    automatic = false
) {

    if (
        index < 0 ||
        index >= memories.length
    ) {
        return;
    }


    if (memoryChanging) {
        return;
    }


    memoryChanging = true;


    /*
       Fade current photo out.
    */

    memoryPhoto.style.opacity =
        "0";

    memoryPhoto.style.transform =
        "scale(.85) rotate(4deg)";


    setTimeout(() => {

        /*
           Change image.
        */

        memoryImage.src =
            memories[index].photo;


        /*
           Change caption.
        */

        memoryCaption.textContent =
            memories[index].caption;


        /*
           Change number.
        */

        memoryNumber.textContent =
            String(index + 1).padStart(
                2,
                "0"
            );


        /*
           Bring new photo in.
        */

        memoryPhoto.style.opacity =
            "1";

        memoryPhoto.style.transform =
            "scale(1) rotate(-2deg)";


        memoryIndex = index;

        memoryChanging = false;


    }, 500);

}


/* =========================================================
   START MEMORY SLIDESHOW
========================================================= */

function startMemorySlideshow() {

    stopMemorySlideshow();


    memoryTimer =
        setInterval(() => {

            /*
               If we're already on the last
               memory, stop automatically.

               We do NOT automatically leave
               the memory scene.

               Mummy can enjoy the final photo
               and click "Next memory".
            */

            if (
                memoryIndex >=
                memories.length - 1
            ) {

                stopMemorySlideshow();

                return;

            }


            showMemory(
                memoryIndex + 1,
                true
            );

        }, MEMORY_DURATION);

}


/* =========================================================
   STOP MEMORY SLIDESHOW
========================================================= */

function stopMemorySlideshow() {

    if (memoryTimer !== null) {

        clearInterval(
            memoryTimer
        );

        memoryTimer = null;

    }

}


/* =========================================================
   MEMORY SCENE ACTIVATION
========================================================= */


/*
   Watch when Scene 5 becomes active.

   The slideshow starts when the
   memory scene appears.
*/

const scene5 =
    document.getElementById(
        "scene5"
    );


const sceneObserver =
    new MutationObserver(() => {

        if (
            scene5.classList.contains(
                "active"
            )
        ) {

            startMemorySlideshow();

        }

        else {

            stopMemorySlideshow();

        }

    });


sceneObserver.observe(
    scene5,
    {
        attributes: true,
        attributeFilter: [
            "class"
        ]
    }
);


/* =========================================================
   NEXT MEMORY BUTTON
========================================================= */

memoryNext.addEventListener(
    "click",
    () => {

        /*
           Stop automatic slideshow temporarily.
        */

        stopMemorySlideshow();


        /*
           If there are more memories,
           show the next one.
        */

        if (
            memoryIndex <
            memories.length - 1
        ) {

            showMemory(
                memoryIndex + 1
            );


            /*
               Restart automatic slideshow
               after manual interaction.
            */

            setTimeout(() => {

                if (
                    scene5.classList.contains(
                        "active"
                    )
                ) {

                    startMemorySlideshow();

                }

            }, 700);

        }

        /*
           Final memory reached.
        */

        else {

            memoryIndex = 0;

            stopMemorySlideshow();

            goToScene(5);

        }

    }
);


/* =========================================================
   SCENE 6
   FAMILY
========================================================= */

const familyNext =
    document.getElementById(
        "familyNext"
    );


familyNext.addEventListener(
    "click",
    () => {

        stopMemorySlideshow();

        goToScene(6);

    }
);


/* =========================================================
   SCENE 7
   VIDEO
========================================================= */

const memoryVideo =
    document.getElementById(
        "memoryVideo"
    );

const videoNext =
    document.getElementById(
        "videoNext"
    );


videoNext.addEventListener(
    "click",
    () => {

        goToScene(7);

    }
);


/*
   If video finishes naturally,
   update button.
*/

memoryVideo.addEventListener(
    "ended",
    () => {

        videoNext.textContent =
            "Continue to the cake 🎂";

    }
);


/* =========================================================
   SCENE 8
   CAKE
========================================================= */

const blowButton =
    document.getElementById(
        "blowButton"
    );

const flame =
    document.querySelector(
        ".flame"
    );


let candleBlown = false;


blowButton.addEventListener(
    "click",
    () => {

        if (candleBlown) {
            return;
        }

        candleBlown = true;


        /*
           Blow out candle.
        */

        flame.style.opacity =
            "0";

        flame.style.transform =
            "translateX(-50%) scale(.2)";


        blowButton.textContent =
            "🎉 HAPPY BIRTHDAY!";


        createBirthdayExplosion();


        setTimeout(() => {

            goToScene(8);

        }, 1800);

    }
);


/* =========================================================
   BIRTHDAY EXPLOSION
========================================================= */

function createBirthdayExplosion() {

    const emojis = [
        "🎉",
        "🎂",
        "❤️",
        "💗",
        "✨",
        "🌸",
        "⭐",
        "🎈"
    ];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.zIndex =
            "2000";

        item.style.pointerEvents =
            "none";

        item.style.fontSize =
            14 +
            Math.random() * 28 +
            "px";


        document.body.appendChild(
            item
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            150 +
            Math.random() *
            500;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        item.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.3)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(720deg)
                        scale(1.3)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1300 +
                    Math.random() * 1200,

                easing:
                    "cubic-bezier(.15,.75,.3,1)"
            }
        );


        setTimeout(() => {

            item.remove();

        }, 2700);

    }

}


/* =========================================================
   SCENE 9
   FINAL
========================================================= */

const replayButton =
    document.getElementById(
        "replayButton"
    );


function finalCelebration() {

    const container =
        document.getElementById(
            "finalConfetti"
        );


    const colors = [
        "#ff477e",
        "#ffd34e",
        "#ffffff",
        "#ff9db8",
        "#7bdff2"
    ];


    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            2 +
            Math.random() * 4 +
            "s";


        piece.style.animationDelay =
            Math.random() * 2 +
            "s";


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


function showFinalScene() {

    goToScene(8);

    setTimeout(() => {

        finalCelebration();

    }, 700);

}


/* =========================================================
   REPLAY
========================================================= */

replayButton.addEventListener(
    "click",
    () => {

        /*
           Stop memory slideshow.
        */

        stopMemorySlideshow();


        /*
           Reset scene.
        */

        currentScene = 0;


        scenes.forEach(
            scene => {

                scene.classList.remove(
                    "active"
                );

            }
        );


        scenes[0].classList.add(
            "active"
        );


        /* =================================================
           RESET GIFT
        ================================================= */

        giftOpened = false;


        const lid =
            document.querySelector(
                ".gift-lid"
            );

        const bow =
            document.querySelector(
                ".gift-bow"
            );

        const box =
            document.querySelector(
                ".gift-box"
            );


        lid.style.transform =
            "";

        bow.style.transform =
            "translateX(-50%)";

        box.style.transform =
            "";


        /* =================================================
           RESET CANDLE
        ================================================= */

        candleBlown = false;


        flame.style.opacity =
            "1";

        flame.style.transform =
            "";


        blowButton.textContent =
            "BLOW THE CANDLE 🕯️";


        /* =================================================
           RESET MEMORIES
        ================================================= */

        memoryIndex = 0;

        showMemory(0);


        /*
           Restart music from beginning.
        */

        music.currentTime = 0;

        startMusic();


        window.scrollTo(
            0,
            0
        );

    }
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
           Right arrow:
           next scene
        */

        if (
            event.key ===
            "ArrowRight"
        ) {

            if (
                currentScene <
                scenes.length - 1
            ) {

                goToScene(
                    currentScene + 1
                );

            }

        }


        /*
           Escape:
           previous scene
        */

        if (
            event.key ===
            "Escape"
        ) {

            if (
                currentScene > 0
            ) {

                goToScene(
                    currentScene - 1
                );

            }

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

showMemory(0);


/*
   Try music one more time after
   page is fully initialized.
*/

setTimeout(() => {

    startMusic();

}, 300);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "❤️ Mummy Birthday Experience Loaded ❤️"
);

console.log(
    "🎵 London Thumakda is ready."
);

console.log(
    "📸 Continuous memory slideshow ready."
);

console.log(
    `📸 Total memories: ${memories.length}`
);