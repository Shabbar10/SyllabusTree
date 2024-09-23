import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom"

type SubmitBtnProps = {
  text: string
}

export default function SubmitBtn({ text }: SubmitBtnProps) {

  const { pending } = useFormStatus()
  return (
    <button className="group flex items-center justify-center mx-auto gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 " disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {text}{" "}
          <FaPaperPlane className="text-xs opacity-70 translate-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "} </>
      )} </button>
  )
}
