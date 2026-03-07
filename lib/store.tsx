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
    questions: Questions[];
    count: number;
}

interface Questions {
    question: string;
    options: string[];
    answer: string;
}

interface StoreState {
    courses: Course[];
    // tests: Tests[];
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
            url: "https://www.youtube.com/embed/Y1SekvuZ3M4?si=WtrWhCIcqGXZ92xs",
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
            url: "https://www.youtube.com/embed/k9g6aVLH3p4?si=l-rjo1COCth4lRx-",
            description: "Learn React fundamentals",
        },
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

const useQuizStore = create((set) => ({
    tests: [
        {
            id: 1,
        }
    ]
}) )

export default useStore;