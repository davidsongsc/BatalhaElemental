export function medidor(valor, nivel, efeito, valor2) {

    if (efeito === 'ancestral') {
        return valor * nivel + valor2 * 9;
    } else if (efeito === 'dominio') {
        return valor * nivel + valor2  * 8;
    } else if (efeito === 'pleno') {
        return valor * nivel + valor2  * 7;
    } else if (efeito === 'mestre') {
        return valor * nivel + valor2  * 6;
    } else if (efeito === 'especialista') {
        return valor * nivel + valor2  * 5;
    } else if (efeito === 'avançado') {
        return valor * nivel + valor2  * 4;
    } else if (efeito === 'intermediario') {
        return valor * nivel + valor2  * 3;
    } else if (efeito === 'usual') {
        return valor * nivel + valor2  * 2;
    } else if (efeito === 'normal') {
        return valor * nivel + valor2  * 2;
    }
    else {
        return valor * nivel;
    }


}
