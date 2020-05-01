const fP = []
const fW = 90
const fH = 90
const color = [{ "r": 7, "g": 7, "b": 7 }, { "r": 5, "g": 7, "b": 7 }, { "r": 5, "g": 15, "b": 7 }, { "r": 5, "g": 15, "b": 7 }, { "r": 5, "g": 23, "b": 7 }, { "r": 10, "g": 30, "b": 7 }, { "r": 5, "g": 50, "b": 7 }, { "r": 5, "g": 60, "b": 7 }, { "r": 5, "g": 70, "b": 7 }, { "r": 5, "g": 75, "b": 7 }, { "r": 5, "g": 80, "b": 7 }, { "r": 10, "g": 90, "b": 7 }, { "r": 5, "g": 100, "b": 7 }, { "r": 5, "g": 110, "b": 7 }, { "r": 10, "g": 115, "b": 7 }, { "r": 10, "g": 120, "b": 7 }, { "r": 30, "g": 125, "b": 7 }, { "r": 10, "g": 140, "b": 15 }, { "r": 20, "g": 150, "b": 15 }, { "r": 5, "g": 165, "b": 15 }, { "r": 10, "g": 175, "b": 15 }, { "r": 10, "g": 180, "b": 23 }, { "r": 10, "g": 190, "b": 23 }, { "r": 10, "g": 205, "b": 23 }, { "r": 10, "g": 205, "b": 21 }, { "r": 12, "g": 205, "b": 21 }, { "r": 15, "g": 210, "b": 21 }, { "r": 20, "g": 210, "b": 39 }, { "r": 15, "g": 220, "b": 20 }, { "r": 20, "g": 230, "b": 20 }, { "r": 75, "g": 230, "b": 55 }, { "r": 74, "g": 240, "b": 55 }, { "r": 67, "g": 240, "b": 38 }, { "r": 67, "g": 245, "b": 38 }, { "r": 125, "g": 245, "b": 45 }, { "r": 171, "g": 250, "b": 118 }, { "r": 255, "g": 255, "b": 255 }]

function iniciar() {
    estrutura()
    criarf()
    fogo()

    setInterval(calculo, 40)
}

function estrutura() {
    const nP = fW * fH

    for (let i = 0; i < nP; i++) {
        fP[i] = 0
    }
}

function calculo() {
    for (let coluna = 0; coluna < fW; coluna++) {
        for (let linha = 0; linha < fH; linha++) {
            const valor = coluna + (fW * linha)

            acalculo(valor)
        }
    }

    fogo()
}

function acalculo(movivalor) {
    const analise = movivalor + fW

    if (analise >= fW * fH) {
        return
    }

    const desconto = Math.floor(Math.random() * 2)
    const intencidade = fP[analise]
    const novai =
        intencidade - desconto >= 0 ? intencidade - desconto : 0

    fP[movivalor - desconto] = novai
}

function fogo() {
    const debug = false

    let html = '<table cellpadding=0 cellspacing=0>'

    for (let linha = 0; linha < fH; linha++) {
        html += '<tr>'

        for (let coluna = 0; coluna < fW; coluna++) {
            const valor = coluna + (fW * linha)
            const fvalor = fP[valor]
            const colorf = color[fvalor]
            const colores = `${colorf.r},${colorf.g},${colorf.b}`
            html += `<td class="pixel" style="background-color: rgb(${colores})">`
            html += '</td>'
        }

        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#visual').innerHTML = html
}

function criarf() {
    for (let coluna = 0; coluna <= fW; coluna++) {
        const overvalor = fW * fH
        const pixelvalor = (overvalor - fW) + coluna

        fP[pixelvalor] = 36
    }
}

iniciar()
