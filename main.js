function criaJogos(time1, hora, time2) {
    return `
<li>
    <img src="./assets/icon-${time1}.svg" alt="">
        <strong>${hora}</strong>
    <img src="./assets/icon-${time2}.svg" alt="">
</li>
    `
}

function criarCard(data, dia, jogos) {
    return `
    <div class="card">
    <h2>${data} <span>${dia}</span></h2>
    <ul>
        ${jogos}
    </ul>
    </div>
    `
}

document.querySelector('body').innerHTML =
    `
<header>
        Calendário da Copa
</header>
    <main id="cards">      
        ${criarCard(
            "24/11",
            "quinta",
            criaJogos("brazil", "16:00", "serbia") +
            criaJogos("brazil", "20:00", "serbia")
        )}
        ${criarCard(
            "26/11",
            "quinta",
            criaJogos("brazil", "13:00", "serbia")
        )}
        ${criarCard(
            "28/11",
            "quinta",
            criaJogos("brazil", "10:00", "serbia")
        )}

    </main>

`