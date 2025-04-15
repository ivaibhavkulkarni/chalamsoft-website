"use client";

import { supabase } from "@/lib/supabaseClient"
import React, { useEffect, useState } from "react"
import Image from "next/image";

interface JobProps {
    id: number;
    created_at: string;
    jobtitle: string;
    company: string;
    location: string;
    type: string;
    description: string;
    one_line_description: string;
    company_logo: string;
    apply_job_link: string;
}


export default function JobListings(){
    const [data, setData] = useState<JobProps[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from("JobOpenings").select("*"); 

            if(error) console.log("Error message:", error);
            else setData(data as JobProps[]);
        };

        fetchData();
    }, []);
    
    
    return(
        <div>
            <h1>Job listing</h1>
            {data.map(job=> (
                <div key={job.id}>
                    <Image src={job.company_logo} alt={job.company} width={50} height={50} unoptimized/>
                    <h1>{job.jobtitle}</h1>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.type}</p>
                    <p>{job.description}</p>
                    <p>One Liner</p>
                    <p>{job.one_line_description}</p>
                    <p>{job.apply_job_link}</p>
                </div>
            ))}
        </div>
    )
}