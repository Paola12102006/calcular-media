const boxBimestre = document.getElementById('box-bimestre')
const boxAno = document.getElementById('box-ano')
const buttonBim = document.getElementById('btn-bimestre')
const buttonAno = document.getElementById('btn-ano')

function btnBimestre() {
    boxBimestre.style.display = "flex"
    boxAno.style.display = "none"

    buttonBim.classList.add('opacity-btn')
    buttonAno.classList.remove('opacity-btn')
}

function btnAno() {
    boxAno.style.display = "flex"
    boxBimestre.style.display = "none"

    buttonAno.classList.add('opacity-btn')
    buttonBim.classList.remove('opacity-btn')
}

const quartoBimInp = document.getElementById("quarto-bimestre")
const btnMediaBims = document.querySelector('.btn-media-bims')
const formBims = document.querySelector('.form')

quartoBimInp.addEventListener('input', ({ target }) => {
    if (target.value.length >= 1) {
        btnMediaBims.removeAttribute('disabled')
        return
    }

    btnMediaBims.setAttribute('disabled', '')
})

formBims.addEventListener('submit', (event) => {
    event.preventDefault()

    const input = document.querySelectorAll('input')
    const resultado = document.querySelector('.mediaAno')
    const primeiroBim = parseFloat(document.getElementById("primeiro-bimestre").value)
    const segundoBim = parseFloat(document.getElementById("segundo-bimestre").value)
    const terceiroBim = parseFloat(document.getElementById("terceiro-bimestre").value)
    const quartoBim = parseFloat(document.getElementById("quarto-bimestre").value)

    console.log(primeiroBim);

    const media = (primeiroBim + segundoBim + terceiroBim + quartoBim) / 4

    resultado.classList.add('resultado-reveal')

    input.forEach((item, _,) => {
        item.value = ""
    })

    if (media.toFixed(2) >= 6) {
        resultado.innerHTML = `Você foi aprovado. Sua média foi de: ${media.toFixed(2)}`
    } else {
        resultado.innerHTML = `Você foi reprovado. Sua média foi de: ${media.toFixed(2)}`
    }
})

const inpMaterias = document.getElementById('inp-materias')
const btnMateriasQtd = document.querySelector('.btn-materias-qtd')
const containerMateriasInp = document.getElementById('container-materias-inp')

inpMaterias.addEventListener('input', ({ target }) => {
    if (target.value.length >= 1) {
        btnMateriasQtd.removeAttribute('disabled')
        return
    }

    btnMateriasQtd.setAttribute('disabled', '')
})

const createInput = () => {
    const input = document.createElement('input')
    input.className = 'inp-materia'
    input.type = 'number'
    input.min = "0"
    input.max = "10"
    input.required = true

    console.log(input);
    return input
}

function btnMaterias() {
    const boxQtdMaterias = document.getElementById('qtd-materias')
    const containerMaterias = document.getElementById('container-materias')
    boxQtdMaterias.style.display = 'none'
    containerMaterias.style.display = 'flex'

    const qtdMaterias = inpMaterias.value

    for (let i = 0; i < qtdMaterias; i++) {
        const input = createInput()
        containerMateriasInp.appendChild(input)
    }

    const btnQtdMaterias = document.querySelector('.btn-media-materias')

    btnQtdMaterias.addEventListener('click', () => {
        const resultado = document.querySelector('.mediaMaterias')
        const inpMateria = document.querySelectorAll('.inp-materia')
        const notaMateria = []

        resultado.classList.add('resultado-reveal')

        inpMateria.forEach((item, _) => {
            notaMateria.push(Number(item.value))
            item.value = ""
        })

        const somaNotas = notaMateria.reduce((acc, item) => acc + item, 0)

        const media = somaNotas / inpMaterias.value

        if (media.toFixed(2) >= 6) {
            resultado.innerHTML = `Você foi aprovado. Sua média bimestral foi de: ${media.toFixed(2)}`
        } else {
            resultado.innerHTML = `Você foi reprovado. Sua média bimestral foi de: ${media.toFixed(2)}`
        }
    })
}




