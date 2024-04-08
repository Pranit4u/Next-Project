import { ScoreInterface } from "../lib/definitions";
import { lusitana } from "./font";

export default function ResultCard({
  title,
  data,
  isWinner,
}: {
  title: string;
  data: ScoreInterface;
  isWinner: boolean;
}) {

  return (
    <div className="flex relative w-1/6 flex-col gap-2 rounded-xl bg-gray-100 p-4 shadow-sm">
      <img src="/John-Cena.png"
        height={10}
        style={{zIndex: '1'}}
        className={`absolute -top-10 -right-20 ${isWinner ? '' : 'hidden'}`}/>
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-4 text-center text-2xl`}
      >
        {data.score}
      </p>
      <div className="p-2 bg-green-100 rounded-md text-green-600 font-medium">
        Correct: {data.correct}
      </div>
      <div className="p-2 bg-red-100 rounded-md text-red-600 font-medium">
        Wrong: {data.wrong}
      </div>
      <div className="p-2 bg-blue-100 rounded-md text-blue-600 font-medium">
        Skipped: {data.skipped}
      </div>
    </div>
  );
}