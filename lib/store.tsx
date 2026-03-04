import { create } from "zustand";

interface Course {
    id: string | number;
    title: string;
    url: string;
    description: string;
}

interface Tests {
    id: string | number;
    title: string,
    questions: string[];
    count: number;
}

interface StoreState {
    courses: Course[];
    tests: Tests[];
}

const useStore = create<StoreState>((set) => ({
    courses: [
        {
            id: 1,
            title: "Что такое фишинг и фишинговая атака",
            url: "https://www.youtube.com/embed/bmaU8KA0Mrg?si=GK7hES5GUnsBTvLE",
            description: "Тут вы узнаете что такое вообще фишинг и как он работает",
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
            title: "Кибербезопасность и киберпреступность образовательное видео",
            url: "",
            description: "Learn React fundamentals",
        },
        {
            id: 5,
            title: "Минута, отдыха от занятий!",
            url: "https://www.youtube.com/embed/fwVVRigFf1M?si=HZ9R4i3-IxxOecmI",
            description: "Возьми телефон детка!",
        },
        {
            id: 6,
            title: "React Basics",
            url: "",
            description: "Learn React fundamentals",
        },
    ],
    tests: [
        {
            id: 1, 
            title: "Test 1", 
            questions: [
                "Question 1", 
                "Question 2"
            ], 
            count:  2,
        },
        {
            id: 2, 
            title: "Test 2",
            questions: [
                "Question 1", 
                "Question 2",
                "Question 3"
            ], 
            count: 3
        }
    ],
    sendFeedback: async (name: string, phone: string, comment: string) => {
        try {
            const response = await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, comment })
            });
            if (!response.ok) throw new Error('Failed to send feedback');
        } catch (error) {
            console.error('Error sending feedback:', error);
        }
    }
}))

export default useStore;