import React from "react";

const ListagemProdutos = ( { produtos, setAdicionar, setEditar, setInfo, excluirProduto} ) => {

  const editar = (data) => {
    setInfo(data);
    setEditar(true);
  }

    return (
        <>
        <button className="btn btn-primary" onClick={()=> setAdicionar(true)}>Adicionar Produto</button>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
         {produtos?.length ?
         produtos.map((data) => (
          <tr>
            <td>{data._id}</td>
            <td>{data.nome}</td>
            <td>{data.preco}</td>
            <td>{data.quantidade}</td>
            <td>
              <button className="btn btn-success" onClick={() => editar(data)} >Editar</button>
              <button className="btn btn-danger" onClick={() => excluirProduto(data._id)} >Excluir</button>
            </td>
          </tr>
         )) : null }
      </tbody>
    </table>
    </>
    );
};

export default ListagemProdutos;