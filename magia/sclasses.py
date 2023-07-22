from classes import Guerreiro, Mago, Arqueiro

class Vampiro(Guerreiro):
    def __init__(self) -> None:
        super().__init__()

        # Atributos específicos do Vampiro
        self.regeneracao = {"regeneracao": 5}
        self.dano_vampirico = {"dano_vampirico": 20}

        # Habilidade Única do Vampiro
        self.habilidade_unica = "Mordida Vampírica"

    # Método para imprimir informações sobre o Vampiro
    def imprimir_informacoes(self):
        super().imprimir_informacoes()
        print("Subclasse: Vampiro")
        print("Atributos Específicos:")
        print(f"Regeneração: {self.regeneracao[next(iter(self.regeneracao))]}")
        print(f"Dano Vampírico: {self.dano_vampirico[next(iter(self.dano_vampirico))]}")
        print(f"Habilidade Única: {self.habilidade_unica}")
        print("-" * 30)

class Atirador(Arqueiro):
    def __init__(self) -> None:
        super().__init__()

        # Atributos específicos do Atirador
        self.alcance_tiro = {"alcance_tiro": 100}
        self.taxa_critica = {"taxa_critica": 15}

        # Habilidade Única do Atirador
        self.habilidade_unica = "Tiro Preciso"

    # Método para imprimir informações sobre o Atirador
    def imprimir_informacoes(self):
        super().imprimir_informacoes()
        print("Subclasse: Atirador")
        print("Atributos Específicos:")
        print(f"Alcance do Tiro: {self.alcance_tiro[next(iter(self.alcance_tiro))]} metros")
        print(f"Taxa Crítica: {self.taxa_critica[next(iter(self.taxa_critica))]}%")
        print(f"Habilidade Única: {self.habilidade_unica}")
        print("-" * 30)

class Feiticeiro(Mago):
    def __init__(self) -> None:
        super().__init__()

        # Atributos específicos do Feiticeiro
        self.manipulacao_energia = {"manipulacao_energia": 25}
        self.conhecimento_arcano = {"conhecimento_arcano": 18}

        # Habilidade Única do Feiticeiro
        self.habilidade_unica = "Invocação Poderosa"

    # Método para imprimir informações sobre o Feiticeiro
    def imprimir_informacoes(self):
        super().imprimir_informacoes()
        print("Subclasse: Feiticeiro")
        print("Atributos Específicos:")
        print(f"Manipulação de Energia: {self.manipulacao_energia[next(iter(self.manipulacao_energia))]}")
        print(f"Conhecimento Arcano: {self.conhecimento_arcano[next(iter(self.conhecimento_arcano))]}")
        print(f"Habilidade Única: {self.habilidade_unica}")
        print("-" * 30)

# Exemplo de uso das subclasses
vampiro = Vampiro()
atirador = Atirador()
feiticeiro = Feiticeiro()

vampiro.imprimir_informacoes()
atirador.imprimir_informacoes()
feiticeiro.imprimir_informacoes()
