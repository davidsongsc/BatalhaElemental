import eventlet
import socketio

# Inicializando o servidor SocketIO
sio = socketio.Server()
app = socketio.WSGIApp(sio)

# Definindo a função de manipulação de mensagens recebidas
@sio.on('message')
def handle_message(sid, data):
    # Aqui você pode processar a mensagem recebida e fornecer uma resposta
    # Por simplicidade, vamos apenas enviar a mensagem de volta para o cliente
    sio.emit('message', data, room=sid)

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 6000)), app)
