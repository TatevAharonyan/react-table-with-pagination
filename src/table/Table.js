import Th from "./Th";
import "./../style/tabl.scss";
import Td from "./Td";
import TdStatus from "./TdStatus";
import { useState } from "react";



const Table = ({ displayData, openTasc }) => {

    const [resized, setResized] = useState(false);

    window.onresize = function (e) {

        if (e.target.window.innerWidth <= 760) {
            return setResized(true)
        }
        else {
            return setResized(false)

        }
    }

    return (
        <table className="table" key={Math.random()}>
            <thead key={Math.random()}>
                <tr key={Math.random()}>
                    <Th
                        id={Math.random()}
                        classN="width_mini"
                        context="Номер / Дата"
                    />
                    <Th
                        id={Math.random()}
                        classN="width_max"
                        context="Тип задания / Автор"
                    />
                    <Th
                        id={Math.random()}
                        classN={resized ?
                            "width_max"
                            : "width_minResize"}
                        context={!resized ?
                            "Аккаунт / Терминал"
                            : "Ак... / Те..."} />
                    <Th
                        id={Math.random()}
                        classN="width_mini"
                        context="Статус"
                    />
                </tr>
            </thead>
            <tbody>
                {displayData.map(item => {

                    let user = item.created_user.surname + " " + item.created_user.name[0] + ". " + item.created_user.patronymic[0] + ".";
                    let id = "N: " + item.id;
                    return (
                        <tr key={item.id}>
                            <Td
                                classN="width_mini"
                                keyTh={item.oguid}
                                pContext={id}
                                spanContext={item.created_date}
                            />

                            <Td
                                classN="width_max"
                                keyTh={item.order_type.oguid}
                                pContext={item.order_type.name}
                                spanContext={user}
                                openTasc={openTasc}
                            />
                            <Td
                                classN={!resized ? "width_max" : "width_minResize"}
                                keyTd={item.account.oguid}
                                pContext={resized ?
                                    `${item.account.name.slice(0, 3) + "..."}`
                                    : `${item.account.name}`}

                                spanContext={resized ?
                                    `${item.terminal.name.slice(0, 3) + "..."}`
                                    : `${item.terminal.name}`}
                            />

                            <TdStatus
                                keyTd={item.terminal.oguid}
                                context={item.status}
                            />
                        </tr>
                    )
                })
                }


            </tbody>
        </table>
    )

};
export default Table;