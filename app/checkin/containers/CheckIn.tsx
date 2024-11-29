"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./CheckIn.module.css";
import { useAppDispatch } from "@/lib/hooks";
import {
  addCheckIn, getCheckIns,
} from "../lib/features/checkInApiSlice";
import {
  Input
} from "../../ui/inputs/Inputs";
import {
  Table
} from "../../ui/tables/Table";

export const CheckIn = () => {
    const dispatch = useAppDispatch();
    const formRef = useRef(null);
    const [checkIn, setCheckIn] = useState({
      email: "",
      address: "",
      Interval: "0"
    })
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState<any>(null);

    const handleChange = (e : any) => setCheckIn((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    const intervals : any = [{name:'Daily', value:0},{name:'Monthly', value: 1}];

    useEffect(()=>{
      setTimeout( async ()=>{
        let response = await dispatch(getCheckIns({}));
        setRecords(response.payload);
        setIsLoading(false);
      }, 2000)
    }, []);
    

    const handleAddCheckin = async (e : any) => {
      e.preventDefault();
      let email = checkIn.email;
      let address = checkIn.address;
      let Interval = parseInt(checkIn.Interval);
      let response = await dispatch(addCheckIn({email, address, Interval}));
      if( response && response.payload ){
        setRecords(records.concat(response.payload))
      }
      e.target.reset();
    };

    return (
    <div>
      {isLoading ?  <>Loading...</> : <Table name="Check In" records={records}/>}
      
      <form name="check-in-form" ref={formRef} onSubmit={async (e) => handleAddCheckin(e)}>
        <Input type="text" label="email" change={handleChange}/>
        <Input type="text" label="address" change={handleChange}/>
        <Input type="select" label="Interval" change={handleChange} options={intervals}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}