construcoes = ['avançada']
HP = 600
DN = 95
RG = 5
DF = 5

class Torre:
    def __init__(self, equipe, nivel=1, tipo=0) -> str:
        self.nivel = nivel
        self.baseEquipe = equipe
        self.tipo = tipo
        self.hp = HP + 85 * nivel 
        self.dano = DN + 75 * nivel
        self.ranger = RG + 2 * nivel
        self.defesa = DF + 1 * nivel
        
    def __str__(self) -> str:
        return f'Torre {construcoes[self.tipo]} nivel {self.nivel} da base \n{self.baseEquipe},\nHP: {self.hp}, \ndano: {self.dano},\nDistancia Ataque: {self.ranger}\nDefesa: {self.defesa} '
    
torre = [Torre('terra', 1, 0),
         Torre('terra', 3, 0),
         Torre('terra', 5, 0)]

for x in torre:
    print('--'*15)
    print(x)