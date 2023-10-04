SALARIO_BASE = 550

def verificadorCargosNarutais(emprego:str):
    material = {
        'SOL': 'SD',
        'MAR': 'SDM',
        'FUZ': 'SDF',
        'CAB': 'CB',
        'SAR': 'SGT',
        'COR': 'CEL',
        'ALM': 'ALT',       
    }
    if material.get(emprego):

        return material.get(emprego)
    else:
        return emprego
    
class TerraNatal:
    def __init__(self, capacidadeHabitantes=100, nomeIlha='Nome da Ilha', habitantes:list=[]) -> None:
        self.capacidadeHabitantes = capacidadeHabitantes
        self.nomeIlha = nomeIlha
        self.habitantes = []
        self.totalHabitantes = len(self.habitantes)

    def __str__(self) -> str:
        
        return f'{self.nomeIlha}\nHabitantes: {self.totalHabitantes}\nPopulação: {self.habitantes}'
    
    def adicionarNPC(self,listaNpc:list):
        self.habitantes = [[item.nome, item] for item in listaNpc]
        self.totalHabitantes = len(self.habitantes)

GOVERNO_SUPREMO = TerraNatal(1000, 'Base do Governo')

class NPC:
    CONSTRUTOR = [
{
        1   : 'marinha'
    },
{
        1   :   'soldado',
        2   :   'marinheiro',
        3   :   'fuzileiro',
        4   :   'cabo',
        5   :   'cabo fuzileiro',
        6   :   'mestre de armas',
        7   :   'sargento',
        8   :   'sargento pleno',
        9   :   'sargento senior',
        10  :   'sub-oficial',
        11  :   'aspirante',
        12  :   'tenente',
        13  :   'imediato',
        14  :   'capitão',
        15  :   'capitão-comandante',
        16  :   'capitão-veterano',
        17  :   'major',
        18  :   'coronel de navio',
        19  :   'coronel de quartel',
        20  :   'coronel de tropa',
        21  :   'almirante de esquadra',
        22  :   'almirante de ilha',
        23  :   'vice almirante',
        24  :   'almirante',
    }
    ]
    def __init__(self,nome=None, nivel:int=1, profissaoId:int=1, salario=100, poder=100, ilhaOrigem:TerraNatal=GOVERNO_SUPREMO) -> None:
        if salario == 100:
            self.dinheiro = SALARIO_BASE
        else:
            self.dinheiro = salario
        self.nome = nome
        self.profissao = profissaoId      
        self.nivel = nivel
        self.cargo = ''
        self.emprego = ''
        self.poder = poder * nivel
        self.recompensa = poder * self.nivel
        self.ilhaOrigem:TerraNatal = ilhaOrigem
        self.definirNivel(nivel, profissaoId)

    def definirNivel(self, nivel:int=1, profissaoId:int=1):
        if self.profissao == profissaoId:
            if self.nivel == nivel:
                self.dinheiro = self.dinheiro * nivel
                self.cargo = self.CONSTRUTOR[0].get(profissaoId)
                self.emprego = self.CONSTRUTOR[1].get(nivel)
        else:
            self.cargo = 'nativo'

    def __str__(self) -> str:
        self.nomeGuerraLista = str(self.nome).split(' ')
        self.nomeCargoGuerra = str(self.emprego).split(' ')
        primeiras_letras = [palavra[:3] for palavra in self.nomeCargoGuerra]

        return f'Nome: {self.nome} | {verificadorCargosNarutais(primeiras_letras[0].upper())} {self.nomeGuerraLista[-1].upper()}\nOrigem: {self.ilhaOrigem}\n\
Profissão: {self.cargo} | Cargo: {self.emprego}\n\
Reconpensa: {self.recompensa}   | Salario: {self.dinheiro}\nPoder de batalha: {self.poder}  '

GOVERNO = [
    NPC('Marcelo Monteiro', 1),
    NPC('Geronimo Maltez', 1),
    NPC('Gustavo Medina', 2),
    NPC('Oliveira Bruno' ,2),
    NPC('Marcelo Nascimento' ,3),
    NPC('Monica Mourão', 3),
    NPC('Patricia de Camaro', 4),
    NPC('Luiz Brito Pinto', 5),
    NPC('Pereira da luz natividade', 6),
    NPC('ualace irinir', 7),
    NPC('Bartolomeu Gusmão', 8),
    NPC('Cristian Bermarudo', 9),
    NPC('Marcelo Monteiro Maltez', 10),
    NPC('Olavo de Moura',11),
    NPC('Amalri Peixoto',12),
    NPC('Paulo Moura Coelho',13),
    NPC('Tina Baureni',14),
    NPC('Bruno Madelena',15),
    NPC('Cristivão Colombo',16),
    NPC('Leonardo Gomes Breno', 17),
    NPC('Tiago Brandão', 18),
    NPC('Mauro Comodoro', 19),
    NPC('Lunamir Natividade', 20),
    NPC('Felicio de Cesa', 21),
    NPC('Pluma de Material', 22,poder=500),
    
]

GOVERNO_SUPREMO.adicionarNPC(GOVERNO)

print(GOVERNO_SUPREMO)