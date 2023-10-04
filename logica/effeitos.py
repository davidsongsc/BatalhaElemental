from skill import *
from eff.herdeiro import Herdeiro
from eff.personagem import *

class Pessoas:
    def __init__(self) -> None:
        self.nome:str
        self.origem:str
        self.poder:int
        self.magia:str
        self.pontos = 50
        self.atributo_forca = 5
        self.atributo_agilidade = 5
        self.atributo_inteligencia = 5
        self.atributo_vontade = 5
        self.atributo_carisma = 5
    
    def __str__(self) -> str:
        return self.nome

    def novoPersonagem(self, nome, telefone, email, senha):
        self.nome = nome
        self.telefone = telefone
        self.email = email
        self.passecreto = senha

    def __str__(self) -> str:
        return f"Player {self.nome}"


jogador1 = Herdeiro(fogoUm_01.nome, classe=fogoUm_01.classe, tipo_magia=fogoUm_01.tipo_magia, mana=fogoUm_01.mana, habilidades=fogoUm_01.habilidades)
jogador2 = Herdeiro(ventoUm_01.nome, classe=ventoUm_01.classe, tipo_magia=ventoUm_01.tipo_magia, mana=ventoUm_01.mana, habilidades=ventoUm_01.habilidades)

print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE9, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE2, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE3, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE4, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE5, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE6, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador1.usar_habilidade(ATAQUE7, alvo=jogador2)
print(jogador1.status)
print(jogador2.status)
print('----------------------------------------------')
jogador2.usar_habilidade(ATAQUE1, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE2, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE3, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE4, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE5, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE6, alvo=jogador1)
jogador2.usar_habilidade(ATAQUE7, alvo=jogador1)



print(jogador1.status)
print(jogador2.status)
