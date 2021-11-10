

const TdStatus = ({ keyTd, context }) => {
    let color, text;
    switch (context) {
        case "new":
            color = "#c54a48";
            text = "Новое";
            break;
        case 'performed':
            color = "#3276b9";
            text = "Выполняется";
            break;
        case "assigned_to":
            color = "#d99f26";
            text = "Назначено";
            break;
        case "completed":
            color = "#252566";
            text = "Завершено";
            break;
        case "canceled":
            color = "red";
            text = "Отклонено";
            break;
        case "started":
            color = "coral";
            text = "Начал";
            break;
        default:
            color = "transparent";
            text = context;
            break;
    }

    return (
        <td className="td_status" key={keyTd}>
            <div style={{ backgroundColor: color }}>
                <span>{text} </span>
            </div>
        </td>
    )
};

export default TdStatus;