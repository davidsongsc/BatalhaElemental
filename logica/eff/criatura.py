FORCA_BASE: int = 24
AGILIDADE_BASE: int = 17
INTELIGENCIA_BASE: int = 11
NERF_NIVEL: int = 1

class Criatura:
    def __init__(self, nome, tipo, dano=None, hp=None, nivel=1, forca=FORCA_BASE, agilidade=AGILIDADE_BASE, inteligencia=INTELIGENCIA_BASE):
        self.nivel = nivel
        self.nome = nome
        self.hp = forca * 7 * nivel  // NERF_NIVEL
        self.mana = inteligencia * 21 * nivel // NERF_NIVEL
        self.forca = forca + nivel // NERF_NIVEL
        self.agilidade = agilidade + nivel // NERF_NIVEL
        self.inteligencia = inteligencia + nivel // NERF_NIVEL
        self.dano = (self.agilidade + self.forca) + NERF_NIVEL * nivel 
        self.xp = self.hp + self.mana
        self.hp = forca * 17 * nivel // NERF_NIVEL
        self.xp = self.hp + self.mana
        self.tipo = tipo

    def definirNivel(self, nivel):
        self.nivel = nivel
        self.hp = FORCA_BASE * 7 * nivel  // NERF_NIVEL
        self.mana = INTELIGENCIA_BASE * 21 * nivel // NERF_NIVEL
        self.forca = self.forca + nivel // NERF_NIVEL
        self.agilidade = self.agilidade + nivel // NERF_NIVEL
        self.inteligencia = self.inteligencia + nivel // NERF_NIVEL
        self.xp = self.hp + self.mana
        self.dano = (self.agilidade + self.forca) + NERF_NIVEL * nivel 


    def __str__(self):
        return f"{self.nome} (Tipo: {self.tipo},Nivel: {self.nivel}, Dano: {self.dano}, HP: {self.hp}), MANA: {self.mana}), XP: {self.xp}"


GOLEM = Criatura(nome="Golem de Pedra", tipo="Monstro", dano=60, hp=300)
CRIATURAS_FLORESTA = [
    Criatura(nome="Fada Verdejante", tipo="Espírito", dano=50, hp=200),
    Criatura(nome="Espírito da Floresta", tipo="Espírito", dano=55, hp=220),
    Criatura(nome="Unicórnio Selvagem", tipo="Espírito", dano=65, hp=250),
    Criatura(nome="Elfos da Mata", tipo="Espírito", dano=70, hp=280),
    Criatura(nome="Druida Encantado", tipo="Espírito", dano=75, hp=300),
    Criatura(nome="Fauno Dançante", tipo="Espírito", dano=60, hp=220),
    Criatura(nome="Nymph do Bosque", tipo="Espírito", dano=55, hp=210),
    Criatura(nome="Arqueiro das Árvores", tipo="Espírito", dano=65, hp=240),
    Criatura(nome="Guardião dos Bosques", tipo="Espírito", dano=70, hp=260),
    Criatura(nome="Ente Ancião", tipo="Espírito", dano=80, hp=300)
]

CRIATURAS_TERRA = [
    Criatura(nome="Golem de Terra", tipo="Monstro", dano=70, hp=350),
    Criatura(nome="Troll das Cavernas", tipo="Monstro", dano=65, hp=320),
    Criatura(nome="Minotauro", tipo="Monstro", dano=75, hp=380),
    Criatura(nome="Elemental de Terra", tipo="Elemental", dano=80, hp=400),
    Criatura(nome="Dwarf Forjador", tipo="Humanoide", dano=55, hp=300),
    Criatura(nome="Lama de Pedra", tipo="Monstro", dano=50, hp=280),
    Criatura(nome="Gnomo da Montanha", tipo="Humanoide", dano=60, hp=320),
    Criatura(nome="Ogro das Colinas", tipo="Monstro", dano=85, hp=420),
    Criatura(nome="Ciclope Gigante", tipo="Monstro", dano=90, hp=450),
    Criatura(nome="Driade de Cristal", tipo="Espírito", dano=75, hp=350)
]

CRIATURAS_AGUA = [
    Criatura(nome="Golem de Água", tipo="Monstro", dano=65, hp=320),
    Criatura(nome="Sereia Encantadora", tipo="Espírito", dano=55, hp=280),
    Criatura(nome="Elemental de Água", tipo="Elemental", dano=70, hp=340),
    Criatura(nome="Kraken do Abismo", tipo="Monstro", dano=80, hp=380),
    Criatura(nome="Tartaruga Marinha", tipo="Monstro", dano=50, hp=250),
    Criatura(nome="Nereida", tipo="Espírito", dano=60, hp=280),
    Criatura(nome="Peixe Colossal", tipo="Monstro", dano=75, hp=330),
    Criatura(nome="Serpente Marinha", tipo="Monstro", dano=65, hp=300),
    Criatura(nome="Tridente Aquático", tipo="Humanoide", dano=70, hp=310),
    Criatura(nome="Náiade da Fonte", tipo="Espírito", dano=55, hp=270)
]

CRIATURAS_VENTO = [
    Criatura(nome="Harpia Veloz", tipo="Monstro", dano=55, hp=280),
    Criatura(nome="Elemental de Ar", tipo="Elemental", dano=70, hp=320),
    Criatura(nome="Grifo Alado", tipo="Monstro", dano=75, hp=350),
    Criatura(nome="Pégasus Celestial", tipo="Espírito", dano=65, hp=290),
    Criatura(nome="Gênio da Lâmpada", tipo="Espírito", dano=80, hp=380),
    Criatura(nome="Fada dos Ventos", tipo="Espírito", dano=50, hp=250),
    Criatura(nome="Banshee Voadora", tipo="Espírito", dano=60, hp=280),
    Criatura(nome="Espectro Eterno", tipo="Espírito", dano=85, hp=420),
    Criatura(nome="Pássaro Trovejante", tipo="Monstro", dano=90, hp=450),
    Criatura(nome="Nuvem Nebulosa", tipo="Elemental", dano=75, hp=350)
]

CRIATURAS_FOGO = [
    Criatura(nome="Dragão de Fogo", tipo="Monstro", dano=65, hp=320),
    Criatura(nome="Salamandra Flamejante", tipo="Monstro", dano=55, hp=280),
    Criatura(nome="Fênix Rejuvenescente", tipo="Espírito", dano=70, hp=340),
    Criatura(nome="Elemental de Fogo", tipo="Elemental", dano=80, hp=380),
    Criatura(nome="Dragão Vermelho", tipo="Monstro", dano=50, hp=250),
    Criatura(nome="Vulcão em Erupção", tipo="Elemental", dano=60, hp=280),
    Criatura(nome="Hidra de Lava", tipo="Monstro", dano=75, hp=330),
    Criatura(nome="Cérbero Infernal", tipo="Monstro", dano=65, hp=300),
    Criatura(nome="Guerreiro Flamejante", tipo="Humanoide", dano=70, hp=310),
    Criatura(nome="Salamandra de Magma", tipo="Monstro", dano=55, hp=270)
]

CRIATURAS_RAIO = [
    Criatura(nome="Dragão Elétrico", tipo="Monstro", dano=70, hp=350),
    Criatura(nome="Elemental de Raio", tipo="Elemental", dano=65, hp=320),
    Criatura(nome="Grifo Relampejante", tipo="Monstro", dano=75, hp=380),
    Criatura(nome="Centelha Celestial", tipo="Espírito", dano=80, hp=400),
    Criatura(nome="Espectro Elétrico", tipo="Espírito", dano=55, hp=300),
    Criatura(nome="Tempestade Trovejante", tipo="Elemental", dano=50, hp=280),
    Criatura(nome="Golem de Raios", tipo="Elemental", dano=60, hp=320),
    Criatura(nome="Ciclope Relâmpago", tipo="Monstro", dano=85, hp=420),
    Criatura(nome="Espírito da Tempestade", tipo="Espírito", dano=90, hp=450),
    Criatura(nome="Dragão Celestial", tipo="Monstro", dano=75, hp=350)
]

CRIATURAS_INVOCACAO = [
    Criatura(nome="Arcanjo da Criação", tipo="Espírito", nivel=100, forca=18, inteligencia=25, agilidade=10),
    Criatura(nome="Demônio das Sombras", tipo="Espírito", nivel=85),
    Criatura(nome="Elemental Ancestral", tipo="Elemental", dano=75, hp=380),
    Criatura(nome="Guardião Divino", tipo="Espírito", dano=80, hp=400),
    Criatura(nome="Guardião das Trevas", tipo="Espírito", dano=55, hp=300),
    Criatura(nome="Elemental das Profundezas", tipo="Elemental", dano=50, hp=280),
    Criatura(nome="Súcubo Sedutor", tipo="Espírito", dano=60, hp=320),
    Criatura(nome="Cavaleiro Espectral", tipo="Espírito", dano=85, hp=420),
    Criatura(nome="Guardião da Luz", tipo="Espírito", dano=90, hp=450),
    Criatura(nome="Besta Mítica", tipo="Monstro", dano=75, hp=350)
]

if __name__ == '__main__':
    # Teste das criaturas da floresta
    print("Criaturas da Floresta:")
    for criatura in CRIATURAS_FLORESTA:
        print(criatura)

    # Teste das criaturas da terra
    print("\nCriaturas da Terra:")
    for criatura in CRIATURAS_TERRA:
        print(criatura)

    # Teste das criaturas da água
    print("\nCriaturas da Água:")
    for criatura in CRIATURAS_AGUA:
        print(criatura)

    # Teste das criaturas do vento
    print("\nCriaturas do Vento:")
    for criatura in CRIATURAS_VENTO:
        print(criatura)

    # Teste das criaturas do fogo
    print("\nCriaturas do Fogo:")
    for criatura in CRIATURAS_FOGO:
        print(criatura)

    # Teste das criaturas do raio
    print("\nCriaturas do Raio:")
    for criatura in CRIATURAS_RAIO:
        print(criatura)

    # Teste das criaturas de invocação
    print("\nCriaturas de Invocação:")
    for criatura in CRIATURAS_INVOCACAO:
        print(criatura)

    print("\nGOLEM:")
    print(GOLEM)