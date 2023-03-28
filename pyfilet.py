import bpy
from math import sin

# Cria uma nova cena
bpy.ops.scene.new(type='EMPTY')

# Cria uma esfera
bpy.ops.mesh.primitive_uv_sphere_add(radius=1.0, location=(0, 0, 0))

# Cria um objeto para a esfera
sphere_obj = bpy.context.object

# Define o número de frames da animação
num_frames = 50

# Animação
for i in range(num_frames):
    # Define a posição da esfera
    x = sin(i * 0.1) * 5.0
    y = 0.0
    z = 0.0
    sphere_obj.location = (x, y, z)
    
    # Adiciona um novo keyframe
    sphere_obj.keyframe_insert(data_path="location", frame=i)

# Salva o arquivo
bpy.ops.wm.save_as_mainfile(filepath="animacao.blend")
