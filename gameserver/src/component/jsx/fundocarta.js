export function fundoCarta(tipo, efeito) {
    {/* 
        Este metodo retorna o background da carta de acordo
        com {tipo} ou {efeito}.       
        */}

    switch (tipo) {
        case "elemental":
            if (efeito === 'extremo') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'infinito') {
                return 'url("https://i.gifer.com/vJ.gif")';

            } else if (efeito === 'terra') {
                return 'url("https://i.gifer.com/Mnea.gif")';

            } else if (efeito === 'raio') {
                return 'url("https://38.media.tumblr.com/fe3842d7fbe189872e604484b9822028/tumblr_msgt8yn9wk1sgzoo8o1_500.gif")';

            } else if (efeito === 'fogo') {
                return 'url("https://usagif.com/wp-content/uploads/fire-51.gif")';

            } else if (efeito === 'agua') {
                return 'url("https://i.gifer.com/LWgi.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'espacial') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("http://canseidomainstream.com.br/wp-content/uploads/2020/12/depositphotos_377643762-stock-illustration-magic-mushrooms-seamless-pattern-psychedelic_opt-1170x650.jpg")';
            }

        case "estelar":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2020/08/espaco-sideral.jpg")';

            }
        case "militar2":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("http://192.168.0.50:5000/img/fogo.png")';
            }
        case "militar23":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("https://img.elo7.com.br/product/zoom/1CC32F7/floresta-verde-painel-festa-2x1m-painel-em-lona.jpg")';
            }
        case "combatente":
            if (efeito === 'especial') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'armadilha') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'normal') {
                return 'url("https://www.encontrosaleatorios.com.br/wp-content/uploads/2020/06/santuarios-perdidos.png")';

            } else if (efeito === 'armadilhas') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            } else if (efeito === 'extremo') {
                return 'url("http://192.168.0.50:5000/img/magica.png")';
            } else if (efeito === 'ataque') {
                return 'url("https://img.freepik.com/fotos-premium/o-centro-da-via-lactea-com-estrelas-e-poeira-espacial-no-universo_33900-92.jpg?w=360")';
            }
            else {
                return 'url("https://epicorpg.com.br/wp-content/uploads/2019/02/giphy2.gif")';
            }
        case "metal":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'dominio') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("https://cdn.diferenca.com/imagens/tubos-grandes-de-metal-cke.jpg")';
            }

        case "caça":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            } else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';
            }
            else {
                return 'url("https://img.freepik.com/fotos-gratis/homem-adulto-aventureiro-em-pe-dentro-de-uma-caverna-rochosa-paisagem-de-montanha-rochosa-em-segundo-plano_181624-58697.jpg")';
            }

        case "feitiço":
            if (efeito === 'ancestral') {
                return 'url("http://192.168.0.50:5000/img/raio.gif")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            }
            else if (efeito === 'pleno') {
                return 'url("https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif")';

            }
            else {
                return 'url("http://192.168.0.50:5000/img/magica.png")';
            }
        default:
            if (efeito === 'radical') {
                return 'url("https://cdn.awsli.com.br/600x450/129/129579/produto/14742075/b8ca92c6ef.jpg")';
            } else if (efeito === 'dominio') {
                return 'url("https://64.media.tumblr.com/a72de0c87722d1f1288e9f6e4a1598dc/tumblr_pa6esqygmw1s60oo7o1_400.gif")';

            } else if (efeito === 'especialista') {
                return 'url("https://i.pinimg.com/originals/6b/4f/47/6b4f47601333167a545be059023b8082.gif")';

            }
            else if (efeito === 'ataque') {
                return 'url("https://phoneky.co.uk/thumbs/screensavers/down/abstract/speedlight_tw4bx34b.gif")';

            }
            else {
                return 'url()';
            }

    };
}