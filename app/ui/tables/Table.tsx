'use client';

export const Table = (props : any) => {
    let tableNames = Object.keys(props.fields);
   
    return (
        <table key={props.name}>
            <tr>{tableNames.map( (name : string) => <th>{}</th>)}</tr>
            {props.fields.map( (field : any) => <tr>{tableNames.map( (name : string) => <td>{props.fields[name]}</td>)}</tr>)}
        </table>
    )
}