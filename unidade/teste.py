from Dev import *

comandante_npc0 = Militar(nome='amaral', graduacao='coronel')
estadomaior_npc1 = Militar(nome='mendonça', graduacao='tenente coronel')
estadomaior_npc2 = Militar(nome='jinja', graduacao='major')
estadomaior_npc21 = Militar(nome='kobalto', graduacao='major')
estadomaior_npc22 = Militar(nome='ferro', graduacao='major')
estadomaior_npc23 = Militar(nome='fezzarra', graduacao='major')
estadomaior_npc24 = Militar(nome='omar', graduacao='major')
estadomaior_npc25 = Militar(nome='leme', graduacao='major')
estadomaior_npc26 = Militar(nome='zaralias', graduacao='major')
estadomaior_npc3 = Militar(nome='pivot', graduacao='capitão')
estadomaior_npc4 = Militar(nome='loza', graduacao='1º tenente')
estadomaior_npc5 = Militar(nome='tremo', graduacao='2º tenente')
estadomaior_npc6 = Militar(nome='Bruno', graduacao='coronel')
estadomaior_npc7 = Militar(nome='Natividade', graduacao='sargento')
estadomaior_npc8 = Militar(nome='Nelson', graduacao='soldado')
estadomaior_npc9 = Militar(nome='Getulio', graduacao='cabo')

# Batalhão de Comunicação 
btl_comunicacoes = UnidadeMilitar(nome='Batalhão de Comunicações')
# Estado Maior do Batalhão de Comunicação 
estado_maior_com = UnidadeMilitar(nome='Estado Maior' , nivel=2)
estado_maior_com.adicionar_militar(estadomaior_npc1)
estado_maior_com.adicionar_militar(estadomaior_npc2)
estado_maior_com.adicionar_militar(estadomaior_npc21)
estado_maior_com.adicionar_militar(estadomaior_npc22)
estado_maior_com.adicionar_militar(estadomaior_npc23)
estado_maior_com.adicionar_militar(estadomaior_npc24)
estado_maior_com.adicionar_militar(estadomaior_npc25)
estado_maior_com.adicionar_militar(estadomaior_npc26)
# 1ª Cia Com / Batalhão de Comunicação 
_1cia_com = UnidadeMilitar(nome='1ª Cia Com')
_1cia_com.adicionar_militar(estadomaior_npc3)
_1cia_com.adicionar_militar(estadomaior_npc4)
_1cia_com.adicionar_militar(estadomaior_npc5)

btl_comunicacoes.adicionar_subunidade(estado_maior_com)
btl_comunicacoes.adicionar_subunidade(_1cia_com)
btl_comunicacoes.adicionar_militar(comandante_npc0)


#btl_comunicacoes.mostrar_unidade()
btl_comunicacoes.listar_militares()


total_militares_batalhao_comunicacoes = btl_comunicacoes.total_militares_subordinados()
print(f"Total de militares no Batalhão de Comunicações e suas subunidades: {total_militares_batalhao_comunicacoes}")
