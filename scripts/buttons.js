const deliveryButton = document.getElementById("delivery").addEventListener("click",llevarADelivery)
const howitworksButton = document.getElementById("howitworks").addEventListener("click",llevarAHow);
const citiesButton = document.getElementById("city").addEventListener("click",llevarACities);
const imhungryButton = document.getElementById("hungry").addEventListener("click",llevarAPlanes);

function llevarADelivery(e){
    e.preventDefault();
    scrollEffect('#features',1000)
}

function llevarAHow(e){
    e.preventDefault();
    scrollEffect('#worksLabel',1000)
}

function llevarACities(e){
    e.preventDefault();
    scrollEffect('#cities',1000)

}

function llevarAPlanes(e){
    e.preventDefault();
    scrollEffect('#plans',1000)
}

function scrollEffect(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;

    var startTime = null;

    function scrollAnimation(currentTime){
        if (startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);

        window.scrollTo(startPosition,run);

        if (timeElapsed < duration){
            requestAnimationFrame(scrollAnimation);
        }
    }
    

    function ease(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    };
    window.requestAnimationFrame(scrollAnimation);

    console.log("Posicion inicial: " +startPosition+ ". Posicion Final: " + targetPosition + ". Distancia: " + distance )
}