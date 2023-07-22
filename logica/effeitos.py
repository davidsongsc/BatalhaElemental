


from eff.criatura import Criatura
from eff.habilidade import Habilidade

from player.jogador import Jogador

# Habilidades do Jogador
habilidade1 = Habilidade("Emissão", dano=50, custo_mana=30, tempo_recarga=5, tipo="ataque")
habilidade2 = Habilidade("Expansão", dano=80, custo_mana=60, tempo_recarga=12, tipo="area")
habilidade3 = Habilidade("Critical", dano=80, custo_mana=60, tempo_recarga=12, tipo="critico")
habilidade4 = Habilidade("Cura", dano=50, custo_mana=40, tempo_recarga=8, tipo="cura")
habilidade5 = Habilidade("Invocar Golem", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    Criatura(nome="Golem", tipo="Monstro", dano=60, hp=300),
    Criatura(nome="Golem", tipo="Monstro", dano=60, hp=300),
    Criatura(nome="Golem", tipo="Monstro", dano=60, hp=300)
])

jogador1 = Jogador("Jogador1", classe="Guerreiro", tipo_magia="Fogo", mana=600, habilidades=[habilidade1, habilidade2, habilidade3, habilidade4])
jogador2 = Jogador("Jogador2", classe="Mago", tipo_magia="Água", mana=620, habilidades=[habilidade1, habilidade2, habilidade3, habilidade4])

print(jogador1.status)
print(jogador2.status)

jogador1.usar_habilidade(habilidade1, alvo=jogador2)
jogador1.usar_habilidade(habilidade3, alvo=jogador2)

jogador2.usar_habilidade(habilidade1, alvo=jogador1)
jogador2.usar_habilidade(habilidade3, alvo=jogador1)
jogador1.usar_habilidade(habilidade4, alvo=jogador2)

print(jogador1.status)
print(jogador2.status)
