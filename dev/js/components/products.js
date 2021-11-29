
if ($('#shows').length) {
    let shows = document.querySelector("#shows");
    let shows_b = document.querySelector("#shows_b");

    shows_b.addEventListener("click", show);

    function show() {
        shows_b.classList.toggle("hidden");
    }
}