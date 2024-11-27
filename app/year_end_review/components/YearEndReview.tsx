"use client";

import styles from "./YearEndReview.module.css";
import { Box } from '../../ui/boxes/Box';
import Image from "./year_end_review.png";
export const YearEndReview: any = () => {
    return (
        <Box src={Image} pathname='/year_end_review' name="Application Year End Review"/>
    )
}