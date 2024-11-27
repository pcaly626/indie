"use client";
// import { useGetCheckInQuery } from "@/app/checkin/lib/features/checkInApiSlice";
import { useState } from "react";
import styles from "./YearEndReview.module.css";
import { Table } from "../../ui/tables/Table";

export const YearEndReview = () => {

    return (
    <div>
      <label htmlFor="email">Email</label>
      <input name="email" type="text"/>

      <label htmlFor="address">Address</label>
      <input name="address"/>
    </div>
  )
}