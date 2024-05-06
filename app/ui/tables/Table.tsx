'use client';

export const Table = (props : any) => {
    let tableNames = Object.keys(props.records[0]);
   
    return (
        <table key={props.name}>
            <tr>{tableNames.map( (name : string) => <th>{name}</th>)}</tr>
            {props.records.map( (record : any) => <tr>{tableNames.map( (name : string) => <td>{record[name]}</td>)}</tr>)}
        </table>
    )
}