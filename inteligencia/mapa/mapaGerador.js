const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// Código para criar e treinar o modelo aqui...

// Exportar o modelo para um arquivo
async function exportModel() {
  const savePath = "path/to/model-directory";
  await model.save(`file://${savePath}`);
  console.log("Modelo exportado com sucesso.");
}

exportModel();
