import Tarefa from "../Tarefa"

function ListaDeTarefas({tarefa}){
    return(
        <div className="space-y-3">
            <ul>
                {tarefa.map(item=><Tarefa item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}

export default ListaDeTarefas
