

const Th = ({ classN, context, id }) => {
    return (
        <th className = {classN} key = {id}>
            {context}
        </th>
    )
};

export default Th;