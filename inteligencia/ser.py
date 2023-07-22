import tensorflow as tf

# Carregando o conjunto de dados MNIST
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Pré-processamento dos dados
x_train = x_train.reshape(-1, 784) / 255.0
x_test = x_test.reshape(-1, 784) / 255.0

# Definindo a forma de entrada e saída
input_shape = x_train.shape[1]
output_shape = 10  # Número de classes no conjunto de dados MNIST

# Definindo a arquitetura da rede neural base
model_base = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(input_shape,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(output_shape, activation='softmax')
])

# Compilando o modelo
model_base.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Treinando o modelo base
model_base.fit(x_train, y_train, epochs=10, batch_size=32, validation_data=(x_test, y_test))

# Salvando a rede neural base
model_base.save('model_base.h5')
