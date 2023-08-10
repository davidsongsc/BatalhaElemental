class Item:
    def __init__(self, nome=None, lote=None, validade=None, tipo=None, quantidade=1):
        self.nome = nome 
        self.lote = lote
        self.validade = validade
        self.qtd = quantidade
        self.tipo = tipo

    def __str__(self) -> str:
        return f'{self.nome} [qtd: {self.qtd} Lote:{self.lote} Validade: {self.validade}]'

class Unidade:
    def __init__(self, nome=None, capacidade=1):
        self.nome = nome
        self.subunidades = []
        self.itens = []
        self.capacidade = capacidade

    def mostrar_unidade(self, nivel=0):
        prefixo = "  " * nivel
        total_itens_unidade = self.totalItens()  # Total de itens da unidade atual e suas subunidades
        print(f"{prefixo} {self.nome},item G: {total_itens_unidade}, item L: {len(self.itens)}")

        for subunidade in self.subunidades:
            subunidade.mostrar_unidade(nivel + 1)

    def adicionar_subunidade(self, subunidade):
        self.subunidades.append(subunidade)

    def adicionar_item(self, item):
        self.itens.append(item)
        item.unidade = self

    def listarConteudo(self):
        print(f"Itens {self.nome}:")
        n = 0

        for item in self.itens:
            n += 1
            print(f"{item}")

        for subunidade in self.subunidades:
            subunidade.listarConteudo()

    def totalItens(self):
        total_itens = len(self.itens)
        for subunidade in self.subunidades:
            total_itens += subunidade.totalItens()

        return total_itens

