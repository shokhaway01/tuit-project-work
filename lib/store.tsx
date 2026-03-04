import { create } from "zustand";

interface Course {
    id: any;
    title: string;
    url: string;
    description: string;
}

interface StoreState {
    courses: Course[];
    openCourse: (course: Course) => void;
    removeCourse: (id: number) => void;
}

const useStore = create<StoreState>((set) => ({
    courses: [
        {
            id: 1,
            title: "Что такое фишинг и фишинговая атака",
            url: "https://www.youtube.com/embed/bmaU8KA0Mrg?si=GK7hES5GUnsBTvLE",
            description: "Learn React fundamentals",
        },
        {
            id: 2,
            title: "Кибермошенничество: Вишинг",
            url: "https://www.youtube.com/embed/W_6MByzBDUI?si=nSwB_QaRXB7iqc30",
            description: "Learn React fundamentals",
        },
        {
            id: 3,
            title: "Цифровая грамотность в финансовой сфере",
            url: "https://www.youtube.com/embed/SMP-YtCHjdg?si=9NzT3DAJ2IoGakHY",
            description: "Learn React fundamentals",
        },
        {
            id: 4,
            title: "React Basics",
            url: "",
            description: "Learn React fundamentals",
        },
        {
            id: 5,
            title: "React Basics",
            url: "",
            description: "Learn React fundamentals",
        },
        {
            id: 6,
            title: "React Basics",
            url: "",
            description: "Learn React fundamentals",
        },
    ],
    openCourse: (course) => {
        window.location.href = course.id;
    },
    removeCourse: (id) => set((state) => ({
        courses: state.courses.filter(course => course.id !== id)
    }))
}))

export default useStore;