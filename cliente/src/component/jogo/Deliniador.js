import React from "react";
import SpriteAnimation from "./anima/SpriteAnimation";
import Caixa from "../extra/objetos/Box";

export default function DeliniadorCartas({ item }) {
  return (
    <>
      {item.combina === '2d' && (
        <SpriteAnimation imagem={item.imagem} imgefeito={item.imgefeito} width={item.width} frames={item.frames} time={item.time}/>
      ) }
       {item.combina === '3d' && (
        <b style={{
          position: 'relative',
          left: '-13px'
        }}><Caixa item={item} /></b> 
      ) }
    </>
  );
}
