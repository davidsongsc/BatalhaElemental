"""
1:Game Abstração;
    Logica da geração de personagens.
        Cada player administra uma vila com 100 habitantes.
            o player deve escolher antes do game iniciar:
                1, Terreno da vila
                    Terreno A:
                        1A,  Floresta Tropical
                            Personagens:   
                                1, Mattos: O Druida da Selva
                                    Poder: Mattos tem a capacidade de se comunicar com a vida selvagem da floresta e invocar plantas e animais para auxiliá-la em batalhas ou tarefas.
                                    Crença: Ela acredita que a natureza é sagrada e busca proteger e preservar a harmonia da floresta tropical.
                        2A,  Deserto
                            Personagens:
                                1,  Leyla: O Nômade do Deserto
                                    Poder: Leyla é especialista em sobrevivência no deserto e possui a habilidade de manipular areia, criando tempestades de areia ou formando armas com esse elemento.
                                    Crença: Ele acredita na importância da adaptabilidade e liberdade, e segue um caminho nômade em busca de sabedoria e experiências.
                        3A,  Tundra
                            Personagens:
                                1,  Erico:
                                    Poder: Erico Sven possui uma afinidade natural com o gelo e o frio da Tundra. Ele pode manipular a neve e o gelo, criando armas afiadas e escudos protetores.
                                    Crença: Ele acredita na força da determinação e na importância da resistência diante das adversidades da Tundra. Sven segue um código de honra e justiça em suas batalhas. 
                                2, Tererei:
                                    Poder: Astrid é uma rastreadora habilidosa e possui uma conexão única com as feras da Tundra. Ela pode se comunicar com elas e até mesmo se transformar temporariamente em um animal de sua escolha.
                                    Crença: Ela acredita na importância de manter o equilíbrio entre os humanos e as criaturas da Tundra. Astrid é uma defensora da natureza e protege os animais da região.
                        4A,  Montanha
                            Personagens:
                                1,  Antares:
                                    Poder: Antares é um mestre das artes marciais e tem a capacidade de canalizar a energia espiritual das montanhas para fortalecer seus ataques e se curar de ferimentos.
                                    Crença: Ele segue os ensinamentos ancestrais dos monges da montanha e acredita no poder da disciplina, meditação e equilíbrio entre corpo e mente.
                                2,  Jôya:
                                    Poder: Lyra possui agilidade e habilidades excepcionais de escalada, permitindo-lhe escalar as altas montanhas com facilidade. Ela é capaz de prever mudanças climáticas e evitar avalanches.
                                    Crença: Ela acredita na superação de limites e na busca pela liberdade nas alturas das montanhas. Lyra é uma exploradora destemida e está sempre em busca de novos desafios.
                        5A,  Cãnion
                            Personagens:
                                1, Monico:
                                    Poder: Monico é um exímio atirador e mestre do combate à distância. Ele é habilidoso com armas de fogo e pode realizar tiros precisos mesmo em condições desafiadoras do cânion.
                                    Crença: Ele acredita na importância da liberdade individual e na busca por justiça. Talon é um justiceiro solitário que defende os oprimidos nas profundezas do cânion.
                                2, Surema:
                                    Poder: Surema possui a habilidade de controlar os ventos do cânion, usando-os para se mover rapidamente ou criar rajadas de ar cortante. Ela pode criar redemoinhos e se proteger usando as correntes de ar.
                                    Crença: Ela acredita na harmonia entre a natureza e os seres humanos. Serena encontra inspiração na dança do vento do cânion e usa sua arte para trazer equilíbrio e paz para a região.
                    Terreno B:
                        1B, Caverna
                        2B, Geleira
                        3B, Pântano
                        4B, Planície
                        5B, Praia

                    Terreno C:
                        1C, Savana
                        2C, Delta
                        3C, Penhasco
                        4C, Planalto
                        5C, Cânion Subaquático

                2, Estilo da vila
                3, Estilo dos cidadões
                4, Crenças, Religiões ou Ciência
                5, Modelo de Justiça   

2:Logicas;
    Terreno A:
        1,  Floresta Tropical
        2,  Deserto
        3,  Tundra
        4,  Montanha
        5,  Cãnion
    
    Terreno B:
        1, Caverna
        2, Geleira
        3, Pântano
        4, Planície
        5, Praia

    Terreno C:
        1, Savana
        2, Delta
        3, Penhasco
        4, Planalto
        5, Cânion Subaquático
3:Estilo
4:Habitação
5:Espirito

"""

a = 567
v = 90

for x in range(1,10):
    a += 2
    v -= 3
    print(f'DIA: {x}\nbola azul: {a}\nbola vermelha: {v}')
    
    