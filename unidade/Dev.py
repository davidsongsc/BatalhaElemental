import random

class Militar:
    def __init__(self, nome=None, graduacao=None, unidade=None):
        self.nome = nome if nome is not None else self.gerar_nome_aleatorio()
        self.graduacao = graduacao if graduacao is not None else self.gerar_graduacao()
        self.unidade = unidade

    def gerar_nome_aleatorio(self):
        nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Sofia', 'Lucas', 'Laura', 'Gabriel', 'Isabella']
        sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Almeida', 'Gomes', 'Costa']
        return f"{random.choice(nomes)} {random.choice(sobrenomes)}"

    def gerar_graduacao(self):
        graduacoes = ['recruta', 'taifeiro', 'soldado', 'cabo', 'aluno', '3º sargento', '2º sargento',
                    '1º sargento', 'sargento aluno', 'cadete', 'subtenente', 'aspirante', '2º tenente',
                    '1º tenente', 'capitão', 'major', 'tenente-coronel', 'coronel', 'general de brigada',
                    'general de divisão', 'general de exército']
        return random.choice(graduacoes)

class HierarquiaMilitar:
    def __init__(self, primeira_unidade):
        self.primeira_unidade = primeira_unidade
        self.hierarquia = {
            'recruta': ['soldado'],
            'soldado': ['cabo'],
            'cabo': ['aluno a sargento'],
            'aluno a sargento': ['sargento'],
            'sargento': ['segundo tenente', 'primeiro sargento'],
            'segundo tenente': ['primeiro tenente'],
            'primeiro tenente': ['capitão'],
            'capitão': ['major'],
            'major': ['tenente-coronel'],
            'tenente-coronel': ['coronel'],
            'coronel': ['general de brigada'],
            'general de brigada': ['general de divisão'],
            'general de divisão': ['general de exército'],
            'general de exército': [],
        }

    def mostrar_unidade(self):
        self.primeira_unidade.mostrar_unidade()

    def gradacao_subordinada(self, gradacao):
        return self.hierarquia.get(gradacao, [])


class UnidadeMilitar:
    def __init__(self, nome=None, nivel=1):
        self.nome = nome
        self.subunidades = []
        self.militares = []
        self.comandante = None
        self.nivel = nivel

    def pode_comandar(self, militar, alvo):
        hierarquia = {
            'coronel': ['general de brigada', 'general de divisão', 'general de exército'],
            'major': ['tenente-coronel', 'coronel'],
            'capitão': ['major', 'tenente-coronel', 'coronel'],
            'tenente': ['capitão', 'major', 'tenente-coronel', 'coronel'],
            'sargento': ['cabo', 'soldado'],
            'cabo': ['soldado'],
            'recruta': [],
        }

        if militar == alvo:
            return False  # Um militar não pode comandar a si mesmo

        if militar.graduacao not in hierarquia:
            return False  # Se a graduação não está na hierarquia, não pode comandar ninguém

        return alvo.graduacao in hierarquia[militar.graduacao]

    def encontrar_comandante_mais_alto(self):
        # Encontra o militar de graduação mais alta na unidade
        comandante_mais_alto = None

        for militar in self.militares:
            if not comandante_mais_alto or militar.graduacao > comandante_mais_alto.graduacao:
                comandante_mais_alto = militar

        return comandante_mais_alto

    def adicionar_comandante(self, comandante):
        if comandante not in self.militares:
            raise ValueError("O comandante deve fazer parte da unidade.")
        self.comandante = comandante

    def mostrar_unidade(self, nivel=0):
        prefixo = "  " * nivel
        print(f"{prefixo} {self.nome}, Militares: {len(self.militares)}")

        if self.comandante:
            print(f"{prefixo}  Comandante: {self.comandante.graduacao} {self.comandante.nome}")

        for subunidade in self.subunidades:
            subunidade.mostrar_unidade(nivel + 1)

    def adicionar_subunidade(self, subunidade):
        self.subunidades.append(subunidade)

    def adicionar_militar(self, militar):
        self.militares.append(militar)
        militar.unidade = self
        if not self.comandante or (militar.graduacao > self.comandante.graduacao):
            self.comandante = militar

    def direcionador(self,nivel, posicao):
        if nivel == 1 and posicao == 1:
            return f'Comandante {self.nome}'
        elif nivel == 1 and posicao == 2:
            return f'Sub-Comandante {self.nome}'
        elif nivel == 1 and posicao == 3:
            return f'1º Imediato {self.nome}'
        elif nivel == 1 and posicao == 4:
            return f'2º Imediato {self.nome}'
        elif nivel == 1 and posicao == 5:
            return f'3º Imediato {self.nome}'
        elif nivel == 1 and posicao == 6:
            return f'4º Imediato {self.nome}'
        elif nivel == 1 and posicao == 7:
            return f'5º Imediato {self.nome}'
        elif nivel == 1 and posicao > 7 and posicao < 20:
            return f'Membro {self.nome}'
        elif nivel == 1 and posicao > 20 and posicao < 30:
            return f'Candidato {self.nome}'
        elif nivel == 2 and posicao == 1:
            return f'Chefia {self.nome}'
        elif nivel == 2 and posicao == 2:
            return f'Sub-Chefia {self.nome}'
        elif nivel == 2 and posicao == 3:
            return f'1º Seção {self.nome}'
        elif nivel == 2 and posicao == 4:
            return f'2º Seção {self.nome}'
        elif nivel == 2 and posicao == 5:
            return f'3º Seção {self.nome}'
        elif nivel == 2 and posicao == 6:
            return f'4º Seção {self.nome}'
        elif nivel == 2 and posicao == 7:
            return f'5º Seção {self.nome}'
        elif nivel == 2 and posicao > 7:
            return f'Auxiliar {self.nome}'
        
    def listar_militares(self):
        print(f"Militares {self.nome}:")
        n = 0
        patentes_contagem = {}

        for militar in self.militares:
            n += 1
            print(f"[{self.direcionador(self.nivel, n)}] {militar.graduacao.upper()} {militar.nome.upper()}")

            # Contagem das patentes
            patente = militar.graduacao.upper()
            patentes_contagem[patente] = patentes_contagem.get(patente, 0) + 1

        for subunidade in self.subunidades:
            subunidade.listar_militares()

        # Mostrar a quantidade de militares de cada patente
        print("\nQuantidade de militares por patente:")
        for patente, quantidade in patentes_contagem.items():
            print(f"{patente}: {quantidade}")

    def total_militares_subordinados(self):
        total_militares = len(self.militares)
        for subunidade in self.subunidades:
            total_militares += subunidade.total_militares_subordinados()

        return total_militares

