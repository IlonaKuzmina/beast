
import { Transition } from '@windmill/react-ui'

interface IFAQfield {
    isOpen: boolean
    question: string
    answer: string
    answerToggler: () => void
}

export const FAQfield = ({ isOpen, question, answer, answerToggler }: IFAQfield) => {
    return (
        <div className="bg-backgroundBox p-[40px] rounded-xl mb-[20px] cursor-pointer" onClick={answerToggler}>
            <div className="text-[20px] font-bold flex flex-row justify-between items-center" >
                {question}

                {!isOpen
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <rect x="7" y="0.714355" width="4" height="18" fill="#ffffff"></rect>
                        <rect x="18" y="7.71436" width="4" height="18" transform="rotate(90 18 7.71436)" fill="#ffffff"></rect>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <rect x="18" y="7.71436" width="4" height="18" transform="rotate(90 18 7.71436)" fill="#ffffff"></rect>
                    </svg>
                }
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-500 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-500 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="pt-[40px] max-w-[90%]">
                    {answer}
                </div>
            </Transition>
        </div>
    )
}
