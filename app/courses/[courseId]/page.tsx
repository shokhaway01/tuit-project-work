'use client'
import useStore from '@/lib/store';
import { useParams, useRouter } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId;
    const courses = useStore((state) => state.courses);
    
    const course = courses.find((c) => c.id == courseId);
    const currentIndex = courses.findIndex((c) => c.id == courseId);
    
    if (!course) {
        return <div className='flex justify-center items-center h-screen text-gray-400'>Course not found</div>;
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            router.push(`/courses/${courses[currentIndex - 1].id}`);
        }
    };

    const handleNext = () => {
        if (currentIndex < courses.length - 1) {
            router.push(`/courses/${courses[currentIndex + 1].id}`);
        }
    };

    const tips = [
        'Практикуйте регулярно для лучшего усвоения материала',
        'Делайте заметки во время просмотра видео',
        'Повторяйте сложные концепции несколько раз',
        'Применяйте полученные знания на практике'
    ];

    return (
        <div className='min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white p-6 md:p-12'>
            <div className='max-w-6xl mx-auto my-15 md:my-15'>
                {/* Video Section */}
                <div className='mb-12'>
                    <div className='aspect-video bg-black rounded-lg overflow-hidden shadow-[0_0_50px_0px_rgba(56,189,248,0.5)] shadow-cyan-500/50'>
                        <iframe
                            className='w-full h-full shadow-lg shadow-cyan-500/50'
                            src={`${course.url}?rel=0&modestbranding=1&controls=1&autoplay=1`}
                            title={course.title}
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Course Info Section */}
                <div className='space-y-6'>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>{course.title}</h1>
                        <p className='text-lg text-gray-400'>{course.description}</p>
                    </div>

                    {/* Additional Details */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                        <div className='bg-slate-800 rounded-lg p-6 border border-slate-700'>
                            <p className='text-gray-400 text-sm'>Duration</p>
                            <p className='text-xl font-semibold mt-2'>N/A</p>
                        </div>
                        <div className='bg-slate-800 rounded-lg p-6 border border-slate-700'>
                            <p className='text-gray-400 text-sm'>Level</p>
                            <p className='text-xl font-semibold mt-2'>Beginner</p>
                        </div>
                        <div className='bg-slate-800 rounded-lg p-6 border border-slate-700'>
                            <p className='text-gray-400 text-sm'>Category</p>
                            <p className='text-xl font-semibold mt-2'>General</p>
                        </div>
                    </div>

                    {/* Tips Section */}
                    <div className='mt-12'>
                        <h2 className='text-2xl font-bold mb-6'>Полезные советы</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {tips.map((tip, index) => (
                                <div key={index} className='bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition'>
                                    <p className='text-gray-300'>{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='flex justify-between items-center mt-12 pt-8 border-t border-slate-700'>
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className='px-6 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition'
                        >
                            ← Предыдущий
                        </button>
                        <span className='text-gray-400'>{currentIndex + 1} / {courses.length}</span>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === courses.length - 1}
                            className='px-6 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition'
                        >
                            Следующий →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
