import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import * as React from 'react';

interface CandidateCardProps {
    id: string;
    name: string;
    avatar: string;
    position: string;
    socialLink: [];
}

const CandidateCard: React.FunctionComponent<CandidateCardProps> = ({ id, name, avatar, position, socialLink }) => {
    return (
        <div className="relative px-3 py-3.5 bg-white rounded-md">
            {/* <Link href={``}>
                <div
                    className="absolute px-2 py-1 text-xs font-medium text-white bg-red-400 rounded-sm top-5 left-5"
                    style={{ background: tagHexColor }}
                >
                    {tag}
                </div>
            </Link> */}
            <Link href={''}>
                <div className="flex flex-col justify-center items-center cursor-pointer gap-4">
                    <div className="w-40 h-40 overflow-hidden rounded-2xl">
                        <img src={avatar} className="object-cover w-full h-full rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col items-center w-full gap-2">
                        <div className="text-xl font-semibold text-black">{name}</div>
                        <div className="text-lg font-medium text-indigo-500">{position}</div>
                        <div className="h-px bg-[#F0F0F5] w-full"></div>
                        <div className="flex justify-center items-center w-full gap-10 py-6">
                            <a
                                href=""
                                className="hover:bg-indigo-500 h-10 w-10 text-center hover:text-white rounded-full text-indigo-500 flex justify-center items-center"
                            >
                                <TwitterOutlined className="h-5 w-5" />
                            </a>
                            <a
                                href=""
                                className="hover:bg-indigo-500 h-10 w-10 text-center hover:text-white rounded-full text-indigo-500 flex justify-center items-center"
                            >
                                <FacebookOutlined className="h-5 w-5" />
                            </a>
                            <a
                                href=""
                                className="hover:bg-indigo-500 h-10 w-10 text-center hover:text-white rounded-full text-indigo-500 flex justify-center items-center"
                            >
                                <InstagramOutlined className="h-5 w-5" />
                            </a>
                            <a
                                href=""
                                className="hover:bg-indigo-500 h-10 w-10 text-center hover:text-white rounded-full text-indigo-500 flex justify-center items-center"
                            >
                                <GithubOutlined className="h-5 w-5" />
                            </a>
                        </div>
                        <button className="w-[250px] px-4 py-2 font-semibold text-white bg-indigo-700 cursor-pointer rounded-lg text-sm">
                            Đặt phỏng vấn
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CandidateCard;
