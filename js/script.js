const modal = document.getElementById("modal");
const card = document.getElementById("card");

function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    generateLights();
}

function closeModal() {
    modal.classList.add("hidden");
}


/* Efek bokeh */
function generateLights() {
  // hapus lama biar gak numpuk
    document.querySelectorAll(".light").forEach(e => e.remove());

    for (let i = 0; i < 25; i++) {
        const light = document.createElement("div");
        light.classList.add("light");

        const size = Math.random() * 8 + 4;
        light.style.width = size + "px";
        light.style.height = size + "px";

        light.style.top = Math.random() * 100 + "%";
        light.style.left = Math.random() * 100 + "%";

        light.style.animationDuration = (Math.random() * 5 + 5) + "s";

        card.appendChild(light);
    }
}

/* close kalau klik luar */
modal.addEventListener("click", function (e) {
    if (e.target.id === "modal") {
        closeModal();
    }
});

//clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const time = `${hours} : ${minutes} : ${seconds}`;

    clock.textContent = time;
}

setInterval(updateClock, 1000);
updateClock();

//Date
function updateDate() {
    const dateEl = document.getElementById("date");
    const now = new Date();

    const hari = now.toLocaleDateString("id-ID", { weekday: "long" });
    const tanggal = now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    dateEl.textContent = `${hari}, ${tanggal}`;
}

// jalankan sekali (tanggal tidak perlu update tiap detik)
updateDate();