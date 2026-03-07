'use client'
import useStore from "@/lib/store";
import Link from "next/link";

const CoursePage = () => {
    const courses = useStore(state => state.courses)

    return (
        <div className="min-h-screen bg-slate-950 p-8">
            <h1 className="text-5xl font-bold mt-15 mb-12 text-yellow-300">Курсы</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {courses.map(course => (
                    <div 
                        key={course.id} 
                        className="bg-slate-900 border border-yellow-400/20 rounded-lg p-6 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-300/40 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-semibold mb-2 text-yellow-300">{course.title}</h2>
                        <p className="text-gray-300 mb-4">{course.description}</p>
                        <Link 
                            href={`/courses/${course.id}`} 
                            className="inline-block bg-yellow-400 text-slate-950 px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
                        >
                            Начать
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoursePage
