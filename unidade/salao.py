from estrutura import *

class Mesa(Unidade):
    def __init__(self, nome=None,atendente=None, capacidade=1):
        super().__init__(nome, capacidade)
        self.garcom = atendente

    def mostrar_unidade(self):
        print(f"{self.nome}, garçom: {self.garcom}")


mesa = Mesa(nome='mesa 1', atendente='pedro')

mesa.mostrar_unidade()