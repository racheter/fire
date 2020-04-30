const fP = []
const fW = 60
const fH = 60
const color = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]

function iniciar() {
    estrutura()
    criarf()
    fogo()

    setInterval(calculo, 50)
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

    const desconto = Math.floor(Math.random() * 3)
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

            if (debug === true) {
                html += '<td>'
                html += '<div class="pixel-valor">'
                html += valor
                html += '</div>'
                html += fvalor
                html += '</td>'
            } else {
                const colorf = color[fvalor]
                const colores = `${colorf.r},${colorf.g},${colorf.b}`
                html += `<td class="pixel" style="background-color: rgb(${colores})">`
                html += '</td>'
            }
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