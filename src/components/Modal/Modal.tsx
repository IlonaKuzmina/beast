import Image from "next/image";

interface IModalProps {
    isOpen: boolean
    children: React.ReactNode
    OnClose: () => void
}

export const Modal = ({ isOpen, OnClose, children }: IModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-40" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-min min-w-[300px] md:min-w-[500px] shadow-lg rounded-md bg-white min-h-[300px]">
                <div className="absolute top-3 right-3 cursor-pointer hover:opacity-50" onClick={OnClose}>
                    <Image src="/icons/close.svg" width={20} height={20}  alt="Close"/>
                </div>

                <div className="mt-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
