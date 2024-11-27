"use client";
import { useState, useRef } from "react";
import styles from "./CheckIn.module.css";
import { useAppDispatch } from "@/lib/hooks";
import {
  addCheckIn
} from "../lib/features/checkInApiSlice";
import {
  Input
} from "../../ui/inputs/Inputs";

export const CheckIn = () => {
    const dispatch = useAppDispatch();
    const formRef = useRef(null);
    const [checkIn, setCheckIn] = useState({
      email: "",
      address: "",
      Interval: "0"
    })

    const handleChange = (e : any) => setCheckIn((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    const intervals : any = [{name:'Daily', value:0},{name:'Monthly', value: 1}];

    const handleAddCheckin = async (e : any) => {
      e.preventDefault();
      let email = checkIn.email;
      let address = checkIn.address;
      let Interval = parseInt(checkIn.Interval);
      let result = await dispatch(addCheckIn({email, address, Interval}));
      e.target.reset();
    };

    return (
    <div>
      <form name="check-in-form" ref={formRef} onSubmit={async (e) => handleAddCheckin(e)}>
        <Input type="text" label="email" change={handleChange}/>
        <Input type="text" label="address" change={handleChange}/>
        <Input type="select" label="Interval" change={handleChange} options={intervals}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}