class JogoDota:
    def __init__(self, jogador):
        self.jogador = jogador

    def habilidade1(self, alvo):
        dano = 30
        custo_mana = 20
        tempo_recarga = 5

        if self.jogador.mana >= custo_mana:
            print(f"{self.jogador.nome} ativou a Habilidade 1 em {alvo}.")
            print(f"HP de {alvo} antes do ataque: {alvo.hp}")
            alvo.hp -= dano
            self.jogador.mana -= custo_mana
            self.jogador.tempo_recarga_habilidade1 = tempo_recarga
            print(f"{alvo} sofreu {dano} de dano.")
            print(f"{self.jogador.nome} gastou {custo_mana} de mana.")
        else:
            print("Mana insuficiente para ativar a Habilidade 1.")

    # Implemente as outras habilidades de forma similar...

class Jogador:
    def __init__(self, nome, classe, tipo_magia) -> None:
        self.nome = nome
        self.classe = classe
        self.tipo_magia = tipo_magia
        self.mana = 100
        self.tempo_recarga_habilidade1 = 0
        # Implemente os outros tempos de recarga...

class Inimigo:
    def __init__(self, nome, hp) -> None:
        self.nome = nome
        self.hp = hp

# Exemplo de uso:
jogador1 = Jogador("Jogador1", "Guerreiro", "Fogo")
inimigo1 = Inimigo("Inimigo1", 200)
jogo_dota = JogoDota(jogador1)

print(f"{jogador1.nome}: Mana inicial: {jogador1.mana}")
print(f"{inimigo1.nome}: HP inicial: {inimigo1.hp}")

jogo_dota.habilidade1(inimigo1)

print(f"{jogador1.nome}: Mana restante após Habilidade 1: {jogador1.mana}")
print(f"{inimigo1.nome}: HP após Habilidade 1: {inimigo1.hp}")
