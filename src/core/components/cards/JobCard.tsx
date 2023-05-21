import Link from 'next/link';
import * as React from 'react';

interface JobCardProps {
    id: string;
    title: string;
    salary: string;
    company: string;
    thumbnail: string;
    companyLogo: string;
    tag: string;
    tagHexColor?: string;
}

const JobCard: React.FunctionComponent<JobCardProps> = ({ id, company, companyLogo, salary, thumbnail, title, tag, tagHexColor = '#B128FF' }) => {
    return (
        <div className="relative px-3 py-3.5 bg-white rounded-md">
            <Link href={`/job?tag=${tag}`}>
                <div
                    className="absolute px-2 py-1 text-xs font-medium text-white bg-red-400 rounded-sm top-5 left-5"
                    style={{ background: tagHexColor }}
                >
                    {tag}
                </div>
            </Link>
            <Link href={`/job/${id}`}>
                <div className="flex flex-col justify-between cursor-pointer gap-14">
                    <div className="w-full h-40 overflow-hidden rounded-2xl">
                        <img src={thumbnail} className="object-cover w-full h-full" alt="" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-7">
                        <div className="text-xl font-semibold text-black">{title}</div>
                        <div className="text-lg font-medium text-indigo-500">{salary}</div>
                        <div className="h-px bg-[#F0F0F5] w-full"></div>
                        <div className="flex items-center w-full gap-2">
                            <div className="w-6 h-6 overflow-hidden rounded-full">
                                <img src={companyLogo} alt="" className="object-cover w-full h-full" />
                            </div>
                            <p className="text-xs font-medium text-black">{company}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCard;
