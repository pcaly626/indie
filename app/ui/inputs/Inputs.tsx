"use client";
import styles from './Select.module.css';
import Link from "next/link";
import Image from "next/image";
import { useState, ChangeEvent } from 'react';

interface Options {
    name: string;
    value: string;
}

interface Input {
    type: 'select' | 'text' | string;
    label: string;
    change: (e: ChangeEvent) => void;
    css?: string;
    placeHolder?: string;
    value?: string;
    options?: Array<Options>;
}

export const Input = (props : Input) => {
    switch( props.type ) {
        case "select":
            return (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <select name={props.label} onChange={(e) => props.change(e)}>
                        {props.options?.map( (option : Options) => <option key={option.name} value={option.value}>{option.name}</option>)}
                    </select>
                </>
            )
        case "text":
            return (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <input
                        name={props.label} 
                        key={props.label} 
                        type={props.type} 
                        className={props.css} 
                        value={props.value} 
                        placeholder={props.placeHolder} 
                        onChange={(e) => props.change(e)}/>
                </>
                )
        default:
            return (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <input key={props.label} type="text"/>
                </>
                )
    }

}