from baseAtributos import AtributosStatus
class Personagem(AtributosStatus):
    def __init__(self, nome, origem, classe, tipo_magia) -> None:
        super().__init__()

        # Atributos do Personagem
        self.nome = nome
        self.origem = origem
        self.classe = self.validar_classe(classe)
        self.tipo_magia = tipo_magia

    # Método para validar a classe do personagem
    def validar_classe(self, classe):
        classes_permitidas = ["Guerreiro", "Mago", "Arqueiro", "Vampiro", "Atirador", "Feiticeiro"]
        if classe not in classes_permitidas:
            raise ValueError(f"A classe {classe} não é uma classe válida.")
        return classe

    # Método para imprimir informações sobre o Personagem
    def imprimir_informacoes(self):
        print(f"Nome: {self.nome}")
        print(f"Origem: {self.origem}")
        print(f"Classe: {self.classe}")
        print(f"Tipo de Magia: {self.tipo_magia}")
        

# Personagens Nação/Pais do Fogo.
orgg = "fogo"
fogoUm_01 = Personagem(nome="Marques Blaze", origem=orgg, classe="Arqueiro", tipo_magia="magia das chamas")
fogoUm_02 = Personagem(nome="Patricio Ember", origem=orgg, classe="Feiticeiro", tipo_magia="Magia da brasa")
fogoUm_02 = Personagem(nome="Angenor Solis", origem=orgg, classe="Feiticeiro", tipo_magia="Magia da Luz")
fogoUm_02 = Personagem(nome="Fazolo Pyra", origem=orgg, classe="Guerreiro", tipo_magia="Magia da brasa")
fogoUm_05 = Personagem(nome="Mendonça Kindle", origem=orgg, classe="Guerreiro", tipo_magia="Magia explosiva")
fogoUm_06 = Personagem(nome="Apolinario Ignis", origem=orgg, classe="Mago", tipo_magia="Magia do fogo")
fogoUm_07 = Personagem(nome="Belizario Vulcan", origem=orgg, classe="Feiticeiro", tipo_magia="Magia da erupção")

# Personagens Nação/Pais da Agua
orgg = "agua"
aguaUm_01 = Personagem(nome="Barbara Aqua", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_02 = Personagem(nome="Cassandra Cascade", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_03 = Personagem(nome="Marinará Marina", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_04 = Personagem(nome="Bruno Brook", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_05 = Personagem(nome="Nilton Nile", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_06 = Personagem(nome="Olivia Oceana", origem=orgg, classe="Feiticeiro", tipo_magia="")
aguaUm_07 = Personagem(nome="Marta Misty", origem=orgg, classe="Guerreiro", tipo_magia="")
aguaUm_08 = Personagem(nome="Leticia Lagoon", origem=orgg, classe="Arqueiro", tipo_magia="")
aguaUm_09 = Personagem(nome="Darlene Delta", origem=orgg, classe="Atirador", tipo_magia="")
aguaUm_10 = Personagem(nome="Debora Delta", origem=orgg, classe="Vampiro", tipo_magia="")

orgg = "vento"
ventoUm_01 = Personagem(nome="Jessica Zephyr", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_02 = Personagem(nome="Gomes Gale", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_03 = Personagem(nome="Aline Aurora", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_04 = Personagem(nome="Zé Maria", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_05 = Personagem(nome="Kleiton K", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_06 = Personagem(nome="Imperador", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_07 = Personagem(nome="Tiririm", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_08 = Personagem(nome="Bar Bá", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_09 = Personagem(nome="Mister", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_10 = Personagem(nome="Cara do Açougue", origem=orgg, classe="Feiticeiro", tipo_magia="")
ventoUm_11 = Personagem(nome="Medico", origem=orgg, classe="Feiticeiro", tipo_magia="")

# Imprimir informações dos personagens
fogoUm_01.imprimir_informacoes()
fogoUm_02.imprimir_informacoes()
