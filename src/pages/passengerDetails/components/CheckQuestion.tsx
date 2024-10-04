import { useState } from "react";

interface CheckQuestionProps {
  question: string
}

export function CheckQuestion({ question }: CheckQuestionProps) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  }

  return (
    <div className="flex justify-between">
      <p className="font-bold text-xl">{question}</p>
      <span className={`w-12 relative border-2 border-primary-400 rounded-full hover:cursor-pointer before:transition-transform
                    before:absolute before:size-5 before:bg-primary-400 before:m-[2px] before:rounded-full
                    ${active ? 'before:translate-x-5 bg-primary-400 before:bg-primary-50' : ''}`}
        onClick={handleActive}
      >
      </span>
    </div>

  )
}
