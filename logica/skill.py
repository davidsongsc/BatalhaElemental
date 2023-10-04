from eff.criatura import *
from eff.habilidade import Habilidade

fada1 = CRIATURAS_FLORESTA[1]
fada1.definirNivel(1)
flora1 = CRIATURAS_FLORESTA[3]
flora2 = CRIATURAS_FLORESTA[4]
flora3 = CRIATURAS_FLORESTA[5]
flora4 = CRIATURAS_FLORESTA[6]
arcanjo = CRIATURAS_INVOCACAO[0]
arcanjo.definirNivel(1)

# Habilidades do Guerreiro
ATAQUE1 = Habilidade("investida", dano=50, custo_mana=50, tempo_recarga=5, tipo="ataque")
ATAQUE2 = Habilidade("socao", dano=50, custo_mana=65, tempo_recarga=5, tipo="ataque")
ATAQUE3 = Habilidade("puxada", dano=80, custo_mana=35, tempo_recarga=12, tipo="ataque")
ATAQUE4 = Habilidade("oaocos", dano=45, custo_mana=75, tempo_recarga=12, tipo="ataque")
ATAQUE5 = Habilidade("concentrado", dano=90, custo_mana=180, tempo_recarga=8, tipo="critico")
ATAQUE6 = Habilidade("manifestacao", dano=50, custo_mana=40, tempo_recarga=8, tipo="aura")
ATAQUE7 = Habilidade("cura", dano=90, custo_mana=40, tempo_recarga=8, tipo="cura")
ATAQUE9 = Habilidade("ritual supremo", dano=0, custo_mana=140, tempo_recarga=550, tipo="ritual")
#Invocações
ATAQUE8 = Habilidade("Fadinha", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    flora1,
    flora2,
    flora3,
    flora4  
])


# INVOCADOR
INVOCADOR1 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR2 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR3 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR4 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR5 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR6 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR7 = Habilidade("Iluminado", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    arcanjo
])
INVOCADOR8 = Habilidade("Golem", dano=0, custo_mana=80, tempo_recarga=15, tipo="invocar", criaturas_invocadas=[
    GOLEM
])