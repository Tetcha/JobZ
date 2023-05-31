import * as React from 'react';

interface CandidateDetailProps {}

const CandidateDetail: React.FunctionComponent<CandidateDetailProps> = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-start w-full h-auto max-w-screen-lg gap-4 p-10 my-5 ">
                    <div className="h-full w-60">
                        <img src="/images/avatars/creator_2.jpg" alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col w-full h-auto max-w-xl gap-10">
                        <div>
                            <h1 className="text-3xl font-bold">Nguyễn Văn Hải</h1>
                            <p className="text-base">Front-end Developer</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Giới thiệu</h1>
                            <p className="text-base">
                                Lập trình viên website với kinh nghiệm làm việc trong ngành công nghệ thông tin trong suốt 5 năm qua. Tôi đam mê với
                                công việc lập trình website, có khả năng xây dựng website từ đầu đến cuối, tạo ra những sản phẩm chất lượng và mang
                                tính sáng tạo cao. Tôi có kinh nghiệm với nhiều ngôn ngữ lập trình khác nhau, bao gồm HTML, CSS, JavaScript, PHP,
                                MySQL, và CMS như WordPress. Tôi có khả năng làm việc độc lập hoặc làm việc nhóm, tận tâm và có trách nhiệm cao trong
                                công việc.
                            </p>
                        </div>
                        <div className="w-full h-full">
                            <img src="/images/cv.jpg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <button className="w-[250px] px-4 py-2 font-semibold text-white bg-indigo-700 cursor-pointer rounded-lg text-sm">
                        Đặt lịch phỏng vấn
                    </button>
                </div>
            </div>
        </>
    );
};

export default CandidateDetail;
