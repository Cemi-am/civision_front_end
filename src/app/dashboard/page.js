"use client";

import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import Price from "../components/Price";
import Graphs from "../components/Graphs";

export default function Page() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchDatabase = async () => {
                const res = await fetch('/database.json');
                const data = await res.json();
                setData(data);
                setFilteredData(data);
        }; 
        fetchDatabase();
    }, []);

    const handleFilter = (filters) => {
        let filtered = [...data];

        for (let key in filters) {
            if (filters[key] !== undefined && filters[key] !== "") {
                if (key.endsWith("Min") || key.endsWith("Max")) {
                    const filterKey = key.replace("Min", "").replace("Max", "");
                    if (key.endsWith("Min")) {
                        filtered = filtered.filter((item) => item[filterKey] >= filters[key]);
                    }
                    if (key.endsWith("Max")) {
                        filtered = filtered.filter((item) => item[filterKey] <= filters[key]);
                    }
                } else if (filters[key] === "true" || filters[key] === "false") {
                    filtered = filtered.filter((item) => item[key] === (filters[key] === "true"));
                } else {
                    filtered = filtered.filter((item) => item[key] === filters[key]);
                }
            }
        }
        setFilteredData(filtered);
    };
    
    return (
        <main>
            <FilterBar onFilterChange={handleFilter} />
            <Graphs data={filteredData} />
        </main>
    );
}