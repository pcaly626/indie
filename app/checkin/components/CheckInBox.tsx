"use client";

import styles from "./CheckInBox.module.css";
import { Box } from '../../ui/boxes/Box';
import Image from "./checkin.png";
export const CheckInBox: any = () => {
    return (
        <Box src={Image} pathname='/checkin' name="Application Checkin"/>
    )
}