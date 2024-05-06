import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type { ReactNode } from "react";
import { Box } from "../../ui/boxes/Box";

export const Home = ({modules}: any) => {
    // let rows = []
    // // Columms
    // let moduleCol = []
    // for (let module = 0; module < modules.length; module++){
    //     if (module > 4) {
    //         rows.push(<Row>{...moduleCol}</Row>);
    //         moduleCol = [];
    //     }
    //     moduleCol.push(<Col><Box props={modules[module]}/></Col>);
    // }

    // return (
    //     <>{rows.map( (row: any) => row)}</>
    // )
    return (
        <Container><Row><Col>{modules.map((module : any) => <Col>{module}</Col> )}</Col></Row></Container>
    )
}