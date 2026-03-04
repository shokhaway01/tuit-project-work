'use client'
import useStore from '@/lib/store';
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const courseId = params.courseId;
    const courses = useStore((state) => state.courses);
    
    const course = courses.filter((c) => c.id == courseId);
    console.log(course);
    

    return (
        <div className='md:p-30 flex justify-center'>
            <iframe
                className='md:w-200 md:h-112.5 w-4/5 h-50 my-20'
                src={`${course[0].url}?rel=0&modestbranding=1&controls=1&autoplay=1`}
                title={course[0].title}
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Page;
