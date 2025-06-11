function SaudaDacoes(props){
    console.warn(props.data)
    return (
        <>
        <h1> `Olá, {props.data.nome}`</h1>
        </>
    )

}

export default SaudaDacoes;