from estrutura import *

ESTOQUE_SECO = Unidade(nome='Estoque Seco')
ESTOQUE_01 = Unidade(nome='Estoque 1 - Bebidas', capacidade=50)

cx_coca = Item(nome='coca-cola lt', quantidade=12, lote='vaol8454', validade='09/2024')

ESTOQUE_01.adicionar_item(cx_coca)
ESTOQUE_SECO.adicionar_subunidade(ESTOQUE_01)

ESTOQUE_SECO.listarConteudo()