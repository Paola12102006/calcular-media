function mudarTema() {

    const body = document.querySelector("body");
    
    const imgBtnTema = document.querySelector(".img-tema");
    const modoEscuroEstaAtivo = body.classList.contains("dark");

    body.classList.toggle("dark");

    if (modoEscuroEstaAtivo) {
        imgBtnTema.setAttribute("src", "./src/imgs/sun.png")
        imgBtnTema.setAttribute('alt', 'Imagem do Sol.')
    } else {
        imgBtnTema.setAttribute("src", "./src/imgs/moon.png");
        imgBtnTema.setAttribute('alt', 'Imagem da Lua.')
    }
}