"use client";

import styles from "./InvestigationBox.module.css";
import { Box } from '../../ui/boxes/Box';
import Image from "./biker.png";
export const InvestigationBox: any = () => {
    return (
        <Box src={Image} pathname='/investigation' name="Investigation"/>
    )
}