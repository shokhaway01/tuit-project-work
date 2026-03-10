import { create } from "zustand";

interface Course {
    id: string | number;
    title: string;
    url: string;
    description: string;
    Tests: Test[];
}

// Типизация Тестов

type Answer = {
    id: number;
    item: string;
}
type Questions = {
    questionId: number;
    question: string;
    answers: Answer[];
    correctAnswerId: number;
}
type Test = {
    id: number;
    name: string;
    description: string;
    questions: Questions[];
}



type StoreState = {
    courses: Course[];
    tests: Test[];
}


const useStore = create<StoreState>(() => ({
    courses: [
        {
            id: 1,
            title: "Что такое фишинг и фишинговая атака",
            url: "https://www.youtube.com/embed/bmaU8KA0Mrg?si=GK7hES5GUnsBTvLE",
            description: "Тут вы узнаете что такое вообще фишинг и как он работает",
            Tests: [],
        },
        {
            id: 2,
            title: "Кибермошенничество: Вишинг",
            url: "https://www.youtube.com/embed/W_6MByzBDUI?si=nSwB_QaRXB7iqc30",
            description: "Learn React fundamentals",
            Tests: [],
        },
        {
            id: 3,
            title: "Цифровая грамотность в финансовой сфере",
            url: "https://www.youtube.com/embed/SMP-YtCHjdg?si=9NzT3DAJ2IoGakHY",
            description: "Learn React fundamentals",
            Tests: [],
        },
        {
            id: 4,
            title: "Кибербезопасность и киберпреступность образовательное видео",
            url: "https://www.youtube.com/embed/Y1SekvuZ3M4?si=WtrWhCIcqGXZ92xs",
            description: "Learn React fundamentals",
            Tests: [],
        },
        {
            id: 5,
            title: "Минута, отдыха от занятий!",
            url: "https://www.youtube.com/embed/fwVVRigFf1M?si=HZ9R4i3-IxxOecmI",
            description: "Возьми телефон детка!",
            Tests: [],
        },
        {
            id: 6,
            title: "React Basics",
            url: "https://www.youtube.com/embed/k9g6aVLH3p4?si=l-rjo1COCth4lRx-",
            description: "Learn React fundamentals",
            Tests: [],
        },
    ],
    tests: [
        {
            id: 1,
            name: "Тест по фишингу",
            description: "Проверьте свои знания о фишинге и его методах",
            questions: [
                {
                    questionId: 1,
                    question: "Что такое фишинг?",
                    
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 3 
                },
                {
                    questionId: 2,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 3,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 4,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 4 
                },
                {
                    questionId: 5,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 2 
                }
            ]
        },
          {
            id: 2,
            name: "Тест по фишингу",
            description: "Проверьте свои знания о фишинге и его методах",
            questions: [
                {
                    questionId: 1,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 3 
                },
                {
                    questionId: 2,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 3,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 4,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 4 
                },
                {
                    questionId: 5,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 2 
                }
            ]
        },
          {
            id: 3,
            name: "Тест по фишингу",
            description: "Проверьте свои знания о фишинге и его методах",
            questions: [
                {
                    questionId: 1,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 3 
                },
                {
                    questionId: 2,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 3,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 1 
                },
                {
                    questionId: 4,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 4 
                },
                {
                    questionId: 5,
                    question: "Что такое фишинг?",
                    answers: [

                        {
                            id: 1,
                            item:"Тип компьютерной игры"
                        },

                        {
                            id: 2,
                            item:"Метод кибермошенничества"
                        },
                        
                        {
                            id: 3,
                            item:"Программа для редактирования видео"
                        },
                        
                        {   
                            id: 4,
                            item:"Вид спорта"
                        },

                    ],
                    correctAnswerId: 2 
                }
            ]
        }
    ]
    
}))

export default useStore;