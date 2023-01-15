import React, { useMemo, useState } from "react";
import axios from "axios";
import Listagem from "./listagem";
import CriarProduto from "./criarProduto";
import EditarProduto from "./editarProduto";

const App = () => {

  const [produtos, setProdutos] = useState(null);
  const [adicionar, setAdicionar ] = useState(false);
  const [editar, setEditar] = useState(false);
  const [info, setInfo] = useState(null);

  const buscarProdutos = async () => {
    try {
      const produtos = await axios.get("http://localhost:3033/produto");
      setProdutos(produtos.data)
    } catch (e) {
      console.log(e);
    }
  };

  const excluirProduto = async(id) => {
    try {
      await axios.delete(`http://localhost:3033/produto/${id}`);
      buscarProdutos();
    } catch (e) {
      console.log(e);
    }
  }

  useMemo(() => {
      buscarProdutos();
  }, []);

  return (
    <>
      {!adicionar && !editar && (
        <Listagem produtos= {produtos} setAdicionar={setAdicionar} setEditar={setEditar} setInfo={setInfo} excluirProduto={excluirProduto}/>
      )}
      {adicionar && (
        <CriarProduto 
            setAdicionar={setAdicionar} 
            buscarProdutos={buscarProdutos} 
        />
      )}
      {
        editar && <EditarProduto  setEditar={setEditar} buscarProdutos={ buscarProdutos } info={info} />
      }
    </>
  );
};

export default App