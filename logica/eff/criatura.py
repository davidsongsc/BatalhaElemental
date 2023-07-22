class Criatura:
    def __init__(self, nome, tipo, dano, hp):
        self.nome = nome
        self.tipo = tipo
        self.dano = dano
        self.hp = hp

    def __str__(self):
        return f"{self.nome} (Tipo: {self.tipo}, Dano: {self.dano}, HP: {self.hp})"

