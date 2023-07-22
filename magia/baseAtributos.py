BASE: int = 1
REFLEXO_BASE: int = 5
VELOCIDADE_BASE: int = 8
VITALIDADE_BASE: int = 44
ENERGIA_BASE: int = 45
DANO_BASE: int = 7

class Atributos:
    def __init__(self) -> None:
        """
        Base de atributibutos primarios da mecanica,
            Força,
            Agilidade,
            Inteligencia,
            Vitalidade,
            Magia
        """
        self.forca: dict = { "forca": 11}
        self.agilidade: dict = { "agilidade": 11}
        self.inteligencia: dict = { "inteligencia": 11}
        self.vitalidade: dict = { "vitalidade": 11}
        self.magia: dict = { "magia": 11}

class Atribuicao(Atributos):
    def __init__(self) -> None:
        """
        Base de atribuição ou atributos secundarios.
            Estamina,
            Dextreza,
            Intuição,
            Resistencia,
            Sabedoria
        """
        super().__init__()
        self.estamina: dict = { "estamina": self.calcular_valor_herdado(self.forca) }
        self.dextreza: dict = { "dextreza": self.calcular_valor_herdado(self.agilidade) }
        self.intuicao: dict = { "intuicao": self.calcular_valor_herdado(self.inteligencia) }
        self.resistencia: dict = { "resistencia": self.calcular_valor_herdado(self.vitalidade) }
        self.sabedoria: dict = { "sabedoria": self.calcular_valor_herdado(self.magia) }

    def calcular_valor_herdado(self, atributo_base):
        return round(atributo_base[next(iter(atributo_base))] * 0.4)

class AtributosStatus(Atribuicao):
    """
    Base para o cálculo do status dos atributos:
        Dano Fisico Base,
        Velocidade,
        Reflexo,
        Vitalidade Total,
        Energia Total
    """
    def __init__(self) -> None:
        super().__init__()

        # Dano Fisico Base
        self.dano_fisico_base = self.calcular_dano_fisico_base()

        # Velocidade
        self.velocidade = self.calcular_velocidade()

        # Reflexo
        self.reflexo = self.calcular_reflexo()

        # Vitalidade Total
        self.vitalidade_total = self.calcular_vitalidade_total()

        # Energia Total
        self.energia_total = self.calcular_energia_total()

    def calcular_dano_fisico_base(self):
        forca = self.forca[next(iter(self.forca))]
        estamina = self.estamina[next(iter(self.estamina))]
        return round(forca * 0.4 + estamina * 0.6) + DANO_BASE

    def calcular_velocidade(self):
        agilidade = self.agilidade[next(iter(self.agilidade))]
        dextreza = self.dextreza[next(iter(self.dextreza))]
        return round(agilidade * 0.6 + dextreza * 0.4) + VELOCIDADE_BASE

    def calcular_reflexo(self):
        intuicao = self.intuicao[next(iter(self.intuicao))]
        inteligencia = self.inteligencia[next(iter(self.inteligencia))]
        return round(intuicao * 0.85 + inteligencia * 0.15) + REFLEXO_BASE

    def calcular_vitalidade_total(self):
        vitalidade = self.vitalidade[next(iter(self.vitalidade))]
        resistencia = self.resistencia[next(iter(self.resistencia))]
        return ((vitalidade * resistencia) * BASE) + VITALIDADE_BASE

    def calcular_energia_total(self):
        magia = self.magia[next(iter(self.magia))]
        sabedoria = self.sabedoria[next(iter(self.sabedoria))]
        return ((magia * sabedoria) * BASE) + ENERGIA_BASE

if __name__ == '__main__':
    atribuicao = Atribuicao()
    print(f'Teste Primario: {__name__}')
    print(atribuicao.forca)        # Saída: {'forca': 11}
    print(atribuicao.agilidade)    # Saída: {'agilidade': 11}
    print(atribuicao.inteligencia) # Saída: {'inteligencia': 11}
    print(atribuicao.vitalidade)   # Saída: {'vitalidade': 11}
    print(atribuicao.magia)        # Saída: {'magia': 11}
    print(atribuicao.estamina)     # Saída: {'estamina': 4}
    print(atribuicao.dextreza)     # Saída: {'dextreza': 4}
    print(atribuicao.intuicao)     # Saída: {'intuicao': 4}
    print(atribuicao.resistencia)  # Saída: {'resistencia': 4}
    print(atribuicao.sabedoria)    # Saída: {'sabedoria': 4}

    atributos_status = AtributosStatus()
    print(f'Teste Secundario: {__name__}')
    print('dano fisico',atributos_status.dano_fisico_base)   # Saída: 7 (80% de força + 20% de estamina)
    print('Velocidade',atributos_status.velocidade)         # Saída: 8 (60% de agilidade + 40% de dextreza)
    print('Reflexo',atributos_status.reflexo)            # Saída: 10 (85% de intuição + 15% de inteligência)
    print('Vitalidade',atributos_status.vitalidade_total)   # Saída: 44 (vitalidade * resistência)
    print('Total Energia',atributos_status.energia_total)      # Saída: 484 (magia * sabedoria * 2)



