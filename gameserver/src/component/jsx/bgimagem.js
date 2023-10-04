


export function backgr(imagem) {
    let linkurl = imagem;
    var minhaDiv = document.getElementById(imagem);
    var parteum = "url('";
    var partedo = "')";
    var partetr = parteum + linkurl + partedo;
    minhaDiv.style.backgroundImage = partetr;

    return linkurl;

}