const CoursePage = () => {
    const courses = [
        {
            id: 1,
            title: "React Basics",
            description: "Learn React fundamentals",
            price: "$29.99"
        },
        {
            id: 2,
            title: "TypeScript Pro",
            description: "Master TypeScript",
            price: "$39.99"
        },
        {
            id: 3,
            title: "Web Design",
            description: "Create beautiful websites",
            price: "$24.99"
        },
        {
            id: 4,
            title: "React Basics",
            description: "Learn React fundamentals",
            price: "$29.99"
        },
        {
            id: 5,
            title: "TypeScript Pro",
            description: "Master TypeScript",
            price: "$39.99"
        },{
            id: 6,
            title: "React Basics",
            description: "Learn React fundamentals",
            price: "$29.99"
        },
        {
            id: 7,
            title: "TypeScript Pro",
            description: "Master TypeScript",
            price: "$39.99"
        },{
            id: 8,
            title: "React Basics",
            description: "Learn React fundamentals",
            price: "$29.99"
        },
        {
            id: 9,
            title: "TypeScript Pro",
            description: "Master TypeScript",
            price: "$39.99"
        },{
            id: 10,
            title: "React Basics",
            description: "Learn React fundamentals",
            price: "$29.99"
        },
        {
            id: 11,
            title: "TypeScript Pro",
            description: "Master TypeScript",
            price: "$39.99"
        },
    ]

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="border rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <p className="text-xl font-bold mb-4">{course.price}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            More Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoursePage