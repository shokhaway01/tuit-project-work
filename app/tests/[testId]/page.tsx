'use client';
import useStore from '@/lib/store';
import { useParams } from 'next/navigation'
import { useState } from 'react';
import Confetti from 'react-confetti'


const page = () => {

    const params = useParams();
    const testId = params.testId;
    const testsStore = useStore( (state) => state.tests );
    const test = useStore( () => (testsStore.find( (t) => t.id == Number(testId) )));
const [value, setValue] = useState<any[]>([]);
const [valueans, setValueans] = useState<any[]>([]);
console.log(test?.questions);

const [confettiStatus, setConfettiStatus] = useState(false);

const handleSubmit = () => {
    if (value.length > 0) {
        const correctAnswers = test?.questions?.map((p:any, i:number) => p?.correctAnswerId === value[i] ? true : false);
        setValueans(correctAnswers || []);
        if (correctAnswers) {
            const correctCount = correctAnswers.filter(ans => ans).length;
            if (correctCount >= 3) {
                setConfettiStatus(true);
                setTimeout(() => {
                    setConfettiStatus(false);
                }, 5000); // Confetti will disappear after 5 seconds
            }
        }
    }
};



    
    
    





  return (
    <div className='min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white p-6 md:p-12'>

        <div className='max-w-6xl mx-auto my-15 md:my-15'>
            {!test ? (
                <div className='text-center text-gray-400'>Test not found</div>
            ) : (
                <>
                    {
                        confettiStatus && <Confetti className='w-full h-auto absolute top-[50%] left-0 z-30'/>
                    }

                    {/* Course Info Section */}
                    <div className='space-y-6'>
                        <div>
                            <h1 className='text-4xl font-bold mb-2'>{test.name}</h1>
                            <h1 className='text-4xl font-bold mb-2'>{test.description}</h1>
                            <p className='text-lg text-gray-400'>Вы должны ответить на {test.questions?.length} вопроса!</p>
                        </div>

                        {/* Quiz Questions */}
                        <div className='space-y-6 mt-8'>
                            {test.questions?.map((question, idx) => (
                                <div key={idx} className='bg-slate-800 rounded-lg p-6 border border-slate-700'>
                                    <p className='text-lg font-semibold mb-4'>{idx + 1}. {question.question}</p>
                                    <div className='space-y-3'>
                                        
                                        {question.answers.map((answer, aidx) => (
                                            <div key={aidx} className='flex items-center space-x-3'>
                                                <input
                                                onChange={(e:any) => setValue([...value,Number(e.target.value)])}
                                                    type="radio"
                                                    name={`question-${idx}`}
                                                    value={answer.id}
                                                    className='form-radio text-cyan-500 focus:ring-cyan-500'
                                                />
                                                <label className='text-gray-300'>{answer.item}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button onClick={()=>handleSubmit()} className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg mt-8 w-full'>
                            Submit Quiz
                        </button>
                        {
                            valueans.length > 0 && (
                                <div>
                                {valueans.filter(ans => ans).length} out of {test.questions?.length} correct!
                                    {test.questions?.length >= 3 && valueans.filter(ans => ans).length >= 3 ? (
                                        <div className='mt-6 p-4 bg-green-500 text-white rounded-lg'>
                                            <p className='mt-2 text-sm'>Great job! You passed the quiz.</p>
                                        </div>
                                    ) : (
                                        <div className='mt-6 p-4 bg-red-500 text-white rounded-lg'>
                                            <p className='mt-2 text-sm'>You need to answer at least 3 questions correctly to pass.</p>
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default page