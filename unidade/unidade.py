class Unidade:
    def __init__(self, nome, num_membros=0):
        self.nome = nome
        self.num_membros = num_membros
        self.unidades_filhas = []

    def adicionar_unidade_filha(self, unidade_filha):
        if isinstance(unidade_filha, Unidade):
            self.unidades_filhas.append(unidade_filha)
            self.num_membros += unidade_filha.num_membros
        else:
            raise ValueError("A unidade filha deve ser uma instância da classe Unidade.")

    def contar_total_membros(self):
        total_membros = self.num_membros
        for unidade_filha in self.unidades_filhas:
            total_membros += unidade_filha.contar_total_membros()
        return total_membros

    def mostrar_hierarquia(self, nivel=0):
        prefixo = "  " * nivel
        print(f"{prefixo}{self.nome} - Membros: {self.num_membros}")
        for unidade_filha in self.unidades_filhas:
            unidade_filha.mostrar_hierarquia(nivel + 1)

# Exemplo de uso:
if __name__ == "__main__":
    bairro1 = Unidade("Bairro 1", num_membros=100)
    bairro2 = Unidade("Bairro 2", num_membros=150)
    cidade1 = Unidade("Cidade 1")
    cidade2 = Unidade("Cidade 2")
    estado1 = Unidade("Estado 1")
    estado2 = Unidade("Estado 2")
    pais = Unidade("País")

    bairro1.adicionar_unidade_filha(cidade1)
    bairro2.adicionar_unidade_filha(cidade2)
    cidade1.adicionar_unidade_filha(estado1)
    cidade2.adicionar_unidade_filha(estado2)
    estado1.adicionar_unidade_filha(pais)

    # Mostrar hierarquia
    bairro1.mostrar_hierarquia()
    bairro2.mostrar_hierarquia()
    

    # Mostrar hierarquia

    # Contar o total de membros
    total_membros_pais = pais.contar_total_membros()
    print("Total de membros no país:", total_membros_pais)
