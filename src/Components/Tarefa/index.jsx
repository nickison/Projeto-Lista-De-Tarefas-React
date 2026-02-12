function Tarefa({...props}){
    return(
        <li className="bg-slate-100 p-3 rounded shadow-sm">
            <h2 className="font-semibold">
                {props.item.nome}
            </h2>
            <p className="text-sm text-gray-600">
                {props.item.descricao}
            </p>

            <button>

            </button>
        </li>
    )
}

export default Tarefa