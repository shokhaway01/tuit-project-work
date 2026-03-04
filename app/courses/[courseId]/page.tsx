'use client'
import useStore from '@/lib/store';
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const courseId = params.courseId as string;
    const courses = useStore((state) => state.courses);
    
    const course = courses.find((c) => c.id === courseId);

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <h1>HELLO WORLD</h1>
        </div>
    );
};

export default Page;