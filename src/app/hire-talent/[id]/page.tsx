"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Briefcase, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";
import { use } from "react";

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

// params is a Promise due to Next.js changes
export default function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use()
  const { id } = use(params);
  const [job, setJob] = useState<JobProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("JobOpeningsForChalamSoft")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error("Error fetching job:", error);
        setLoading(false);
        notFound();
        return;
      }

      setJob(data as JobProps);
      setLoading(false);
    };

    fetchJob();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Skeleton className="h-12 w-12 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-20 w-full mt-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!job) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                {job.company_logo ? (
                  <Image
                    src={job.company_logo || "/placeholder.svg"}
                    alt={job.company}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100">
                    <Building size={24} className="text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-blue-600">{job.jobtitle}</h3>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Building size={16} className="mr-1" />
                  {job.company}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase size={16} className="mr-1" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1" />
                  {formatDate(job.created_at)}
                </div>
              </div>

              <p className="text-sm font-medium mb-2">{job.one_line_description}</p>

              <div className="mt-4 text-sm text-gray-600 whitespace-pre-wrap">
                {job.description}
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-400 text-white text-sm"
                  onClick={() => window.open(job.apply_job_link, "_blank")}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}