const Td = ({ classN, keyTd, pContext, spanContext, openTasc }) => {
    return (
        <td className={classN} key={keyTd}>
            <p onClick={openTasc} > {pContext} </p>
            <span> {spanContext} </span>
        </td>
    )
};

export default Td;