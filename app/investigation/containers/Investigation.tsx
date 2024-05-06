"use client";
import { useGetQuotesQuery } from "@/app/quotes/lib/features/quotesApiSlice";
import { useState } from "react";
import styles from "./Investigation.module.css";
import { Table } from "../../ui/tables/Table";

export const Investigation = () => {
    let records = [{
      name: 'Test',
      location: 'test',
      origin: 'tesT'
    }]
    return (
    <div>
      <Table records={records}/>
    </div>
  )
}