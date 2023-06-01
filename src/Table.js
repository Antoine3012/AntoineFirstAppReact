import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Number</th>
                <th>Class</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.schedule.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.number}</td>
                <td>{row.name}</td>
                <td>
                    <button onClick = { () => 
                    props.removeClass(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
    // return (
    //     <tbody>
    //         <tr>
    //             <td>MIS 2402</td>
    //             <td>Web Application Development</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 2502</td>
    //             <td>Data and Analytics</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 3406</td>
    //             <td>Cloud Architecture</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 3506</td>
    //             <td>User Experience Design</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 3502</td>
    //             <td>Web Service Programming</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 3535</td>
    //             <td>Lead Global Digital Project</td>
    //         </tr>
    //         <tr>
    //             <td>MIS 4596</td>
    //             <td>Managing Enterprise Cybersecurity</td>
    //         </tr>
    //     </tbody>
    // )
}

const Table = (props) => {
    const {schedule, removeClass} = props
    return (
        <table>
            <TableHeader />
            <TableBody schedule={schedule} removeClass={removeClass}/>
        </table>
    )
}
// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Number</th>
//                         <th>Class</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>MIS 2402</td>
//                         <td>Web Application Development</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 2502</td>
//                         <td>Data and Analytics</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 3406</td>
//                         <td>Cloud Architecture</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 3506</td>
//                         <td>User Experience Design</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 3502</td>
//                         <td>Web Service Programming</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 3535</td>
//                         <td>Lead Global Digital Project</td>
//                     </tr>
//                     <tr>
//                         <td>MIS 4596</td>
//                         <td>Managing Enterprise Cybersecurity</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }
export default Table
