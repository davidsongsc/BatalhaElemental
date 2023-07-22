class Habilidade:
    def __init__(self, nome, dano, custo_mana, tempo_recarga, tipo, criaturas_invocadas=None):
        self.nome = nome
        self.dano = dano
        self.custo_mana = custo_mana
        self.tempo_recarga = tempo_recarga
        self.tipo = tipo
        self.criaturas_invocadas = criaturas_invocadas or []

    def __str__(self):
        return f"{self.nome} (Dano: {self.dano}, Custo de Mana: {self.custo_mana}, Tempo de Recarga: {self.tempo_recarga}, Tipo: {self.tipo})"

