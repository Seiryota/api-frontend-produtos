import React, { useState } from "react";
import axios from "axios";

const EditarProduto = ({setEditar, buscarProdutos, info}) => {
    const [data, setData] = useState({
        nome: info.nome, 
        preco: info.preco,
        quantidade: info.quantidade,
    });

const salvarProduto = async (event) => {
    event.preventDefault();

    try {
        await axios.put(`http://localhost:3033/produto/${info._id}`, data);
        setEditar(false);
        buscarProdutos();
    } catch (e) {
        console.log(e);
    }
}

    return (
        <form onSubmit={salvarProduto}>
            <label className="form-label">Nome</label>
                <input placeholder="Digite o nome do produto" className="form-control" required={true} value={data.nome} onChange={(ev) => setData({ ...data, nome: ev.target.value})}/>

            <label className="form-label">Preço</label>
                <input placeholder="Digite o preço do produto" className="form-control"  required={true} value={data.preco} onChange={(ev) => setData({ ...data, preco: ev.target.value})}/>

            <label className="form-label">Quantidade</label>
                <input placeholder="Digite a quantidade disponível" className="form-control"  required={true} value={data.quantidade} onChange={(ev) => setData({ ...data, quantidade: ev.target.value})} />

            <button type="submit"  className="btn btn-primary">Salvar</button>         
        </form>
    )
}

export default EditarProduto;