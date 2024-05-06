"use client";
import styles from './Box.module.css';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const styleDims = {width: 80, height: 80};

export const Box = (props: any) => {

    return (
        <div className={styles.box} >
            <Link href={props.pathname}>
                <Image 
                src={props.src}
                alt={props.name}
                height={styleDims.height}
                width={styleDims.width}
                 />
            </Link>
        </div>
    )
}