'use client';
import useStore from '@/lib/store';
import { useParams } from 'next/navigation'

const page = () => {

    const params = useParams();
    const testId = params.testId;
    const testsStore = useStore( (state) => state.tests );


    console.log(testsStore);


    const test = useStore( () => (testsStore.find( (t) => t.id == Number(testId) )));

  return (
    <div className='min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white p-6 md:p-12'>
        <div className='max-w-6xl mx-auto my-15 md:my-15'>
            {!test ? (
                <div className='text-center text-gray-400'>Test not found</div>
            ) : (
                <>
                    

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

                        <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg mt-8 w-full'>
                            Submit Quiz
                        </button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default page