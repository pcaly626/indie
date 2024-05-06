import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Home.module.css';
import globalStyles from '../../styles/layout.module.css';
import type { ReactNode } from "react";
import { Box } from "../../ui/boxes/Box";

const ROW_LENGTH = 6;

export const Home = ({modules}: any) => {

    // Calculate a lenght of 5 x N modules
    let rows = [];
    let cols = [];
    for(let m = 0; m < modules.length; m++) {
        if( m % ROW_LENGTH == 0) {
            rows.push(<div className={globalStyles.row} key={`row-${m}`}>{...cols}</div>)
            cols = [];
        }
        cols.push(<div className={globalStyles.col_6} key={`col-${m}`}>{modules[m]}</div>)
    }

    // Fill in the missing columns
    if( cols.length > 0){
        for( let col = cols.length; col < ROW_LENGTH; col++) {
            cols.push(<div className={globalStyles.col_6} key={`col-${col}`}></div>)
        }
        rows.push(<div className={globalStyles.row} key={`row-${modules.length + 1}`}>{...cols}</div>)
    }

    return (
        <div>
            <div className={globalStyles.container}>
                {...rows}
            </div>
        </div>
    )
}