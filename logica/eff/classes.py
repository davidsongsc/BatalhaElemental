from baseAtributos import AtributosStatus

class Guerreiro(AtributosStatus):
    def __init__(self) -> None:
        super().__init__()

        # Atributos base específicos do Guerreiro
        self.forca = {"forca": 15}
        self.agilidade = {"agilidade": 10}
        self.vitalidade = {"vitalidade": 14}

        # Ataque Especial do Guerreiro
        self.ataque_especial = "Corte Poderoso"
        self.habilidade_magica = "Bersek"

    # Método para imprimir informações sobre o Guerreiro
    def imprimir_informacoes(self):
        print("Classe: Guerreiro")
        print("Atributos Base:")
        print(f"Força: {self.forca[next(iter(self.forca))]}")
        print(f"Agilidade: {self.agilidade[next(iter(self.agilidade))]}")
        print(f"Vitalidade: {self.vitalidade[next(iter(self.vitalidade))]}")
        print("Atributos de Status:")
        print(f"Dano Físico Base: {self.dano_fisico_base}")
        print(f"Velocidade: {self.velocidade}")
        print(f"Reflexo: {self.reflexo}")
        print(f"Vitalidade Total: {self.vitalidade_total}")
        print(f"Energia Total: {self.energia_total}")
        print(f"Habilidade Mágica: {self.habilidade_magica}")
        print(f"Ataque Especial: {self.ataque_especial}")
        print("-" * 30)

class Mago(AtributosStatus):
    def __init__(self) -> None:
        super().__init__()

        # Atributos base específicos do Mago
        self.inteligencia = {"inteligencia": 18}
        self.magia = {"magia": 20}

        # Habilidade Mágica do Mago
        self.habilidade_magica = "Bola de Energia"
        self.poderOculto = "Despertar"
        
    # Método para imprimir informações sobre o Mago
    def imprimir_informacoes(self):
        print("Classe: Mago")
        print("Atributos Base:")
        print(f"Inteligência: {self.inteligencia[next(iter(self.inteligencia))]}")
        print(f"Magia: {self.magia[next(iter(self.magia))]}")
        print("Atributos de Status:")
        print(f"Dano Físico Base: {self.dano_fisico_base}")
        print(f"Velocidade: {self.velocidade}")
        print(f"Reflexo: {self.reflexo}")
        print(f"Vitalidade Total: {self.vitalidade_total}")
        print(f"Energia Total: {self.energia_total}")
        print(f"Habilidade Mágica: {self.habilidade_magica}")
        print("-" * 30)

class Arqueiro(AtributosStatus):
    def __init__(self) -> None:
        super().__init__()

        # Atributos base específicos do Arqueiro
        self.agilidade = {"agilidade": 17}
        self.dextreza = {"dextreza": 15}

        # Ataque à Distância do Arqueiro
        self.ataque_distancia = "Flecha Precisa"
        self.habilidade_magica = "Visão Melhorada"

    # Método para imprimir informações sobre o Arqueiro
    def imprimir_informacoes(self):
        print("Classe: Arqueiro")
        print("Atributos Base:")
        print(f"Agilidade: {self.agilidade[next(iter(self.agilidade))]}")
        print(f"Dextreza: {self.dextreza[next(iter(self.dextreza))]}")
        print("Atributos de Status:")
        print(f"Dano Físico Base: {self.dano_fisico_base}")
        print(f"Velocidade: {self.velocidade}")
        print(f"Reflexo: {self.reflexo}")
        print(f"Vitalidade Total: {self.vitalidade_total}")
        print(f"Energia Total: {self.energia_total}")
        print(f"Habilidade Mágica: {self.habilidade_magica}")
        print(f"Ataque à Distância: {self.ataque_distancia}")
        print("-" * 30)

# Exemplo de uso das classes
guerreiro = Guerreiro()
mago = Mago()
arqueiro = Arqueiro()

if __name__ == "__main__":
    guerreiro.imprimir_informacoes()
    mago.imprimir_informacoes()
    arqueiro.imprimir_informacoes()
