class Status:
    def __init__(self, hp, mana, nivel):
        self.hp = hp
        self.mana = mana
        self.nivel = nivel

    def __str__(self):
        return f"HP: {self.hp},Mana: {self.mana}, Nível: {self.nivel}"

