"use client";
import { useGetQuotesQuery } from "@/app/quotes/lib/features/quotesApiSlice";
import { useState } from "react";
import styles from "./Investigation.module.css";
import { Table } from "../../ui/tables/Table";

export const Investigation = () => {
    let fields = {
      name: 'Test',
      location: 'test',
      origin: 'tesT'
    }
    return (
    <div>
      <Table fields={fields}/>
    </div>
  )
}