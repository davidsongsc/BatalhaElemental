# C - Capitão é o administrativo do time.
# 1 - Lider é o Lider da equipe de batalha.
# 2 - Vice lider de batalha.
# 3 - Oficial
# 4 - Comodoro
# 5 - Tripulante

import spacy
from spacy.lang.pt.examples import sentences 

nlp = spacy.load("pt_core_news_sm")
doc = nlp(sentences[0])


def processamento_entrada(entrada_texto):
    doc = nlp(entrada_texto)
    # Aqui você pode acessar várias informações do doc, como tokens, entidades, etc.
    d = []
    for token in doc:
        d.append([token.text, token.pos_, token.dep_])
    return d

def gerador_resposta(doc):
    # Aqui você pode implementar lógica para gerar uma resposta com base nas informações do doc
    return "Olá! Como posso ajudar você?"

print(processamento_entrada(doc))


while True:
    user_input = input("Você: ")
    processed_input = processamento_entrada(user_input)
    response = gerador_resposta(processed_input)
    print("Chatbot:", response)