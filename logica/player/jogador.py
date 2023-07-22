JOGADOR_HP: int = 1000
JOGADOR_NIVEL_INICIAL: int = 1
REGEN_VAMPIRICO: float = 0.1
CRITICAL_DAMAGE_BASE: float = 3
MANA_BASE: int = 600
from .status import Status
class Jogador:
    def __init__(self, nome, classe, tipo_magia, mana, habilidades):
        self.nome = nome
        self.classe = classe
        self.tipo_magia = tipo_magia
        self.mana = mana
        self.habilidades = habilidades
        self.status = Status(hp=JOGADOR_HP, mana=MANA_BASE, nivel=JOGADOR_NIVEL_INICIAL)

    def usar_habilidade(self, habilidade, alvo=None):
        if habilidade in self.habilidades:
            if self.mana >= habilidade.custo_mana:
                print(f"{self.nome} ativou a {habilidade.nome}.")
                print(f"{self.nome} gastou {habilidade.custo_mana} de mana.")
                
                if habilidade.tipo == "ataque":
                    if alvo is not None:
                        alvo.status.hp -= habilidade.dano
                        print(f"{alvo.nome} sofreu {habilidade.dano} de dano.")
                    else:
                        print("Habilidade requer um alvo.")
                
                elif habilidade.tipo == "critico":
                    if alvo is not None:
                        dano = habilidade.dano * CRITICAL_DAMAGE_BASE
                        alvo.status.hp -= dano
                        print(f"{alvo.nome} sofreu {dano} de dano critico!!!")
                    else:
                        print("Habilidade requer um alvo.")

                elif habilidade.tipo == "cura":
                    self.status.hp += habilidade.dano
                    print(f"{self.nome} se curou em {habilidade.dano} pontos de vida.")

                elif habilidade.tipo == "recuperamana":
                    self.status.hp += habilidade.dano
                    print(f"{self.nome} recuperou {habilidade.dano} pontos de mana.")

                elif habilidade.tipo == "restaurar":
                    self.status.hp += habilidade.dano
                    print(f"{self.nome} ativou a habilidade em área e causou {habilidade.dano} de cura em todos os aliados próximos.")

                elif habilidade.tipo == "area":
                    print(f"{self.nome} ativou a habilidade em área e causou {habilidade.dano} de dano em todos os inimigos próximos.")
                
                elif habilidade.tipo == "puro":
                    if alvo is not None:
                        self.status.hp -= habilidade.dano // 2
                        alvo.status.hp -= habilidade.dano
                        print(f"{self.nome} causou {habilidade.dano} de dano puro. ")
                        print(f"{alvo.nome} sofreu {habilidade.dano} de dano.")
                    else:
                        print("Habilidade requer um alvo.")
                
                elif habilidade.tipo == "vampirico":
                    if alvo is not None:
                        alvo.status.hp -= habilidade.dano
                        self.status.hp += alvo.status.hp * REGEN_VAMPIRICO
                        print(f"{self.nome} causou {habilidade.dano} de dano puro. ")
                        print(f"{alvo.nome} sofreu {habilidade.dano} de dano.")
                    else:
                        print("Habilidade requer um alvo.")

                elif habilidade.tipo == "invocar":
                        for criatura in habilidade.criaturas_invocadas:
                            #self.mapa.adicionar_jogador_no_mapa(criatura)
                            print(f"{self.nome} invocou {criatura.nome} ({criatura.tipo}) com {criatura.hp} HP e {criatura.dano} de dano.")

                else:
                    print("Tipo de habilidade desconhecido.")

                self.mana -= habilidade.custo_mana
            else:
                print("Mana insuficiente para ativar a habilidade.")
        else:
            print(f"{self.nome} não possui a habilidade {habilidade.nome}.")

