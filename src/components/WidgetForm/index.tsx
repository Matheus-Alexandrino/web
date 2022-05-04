import { CloseButton } from "../CloseButton";
import { useState } from "react";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';



export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
         image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Elogio',
         image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};




export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6"> Deixe seu Feedback</span>

                <CloseButton />
            </header>

           {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
           ) : (
               <p>Hello World!</p>
           )}

            <footer className="text-xs text-neutral-400">
                Desenvolvido por <a className="underline underline-offset-2" href="https://github.com/Matheus-Alexandrino">Matheus💻Alexandrino</a>
            </footer>
        </div>
    );
}