import { useLocation } from "react-router-dom";
import { useProgress } from "../hooks/useProgress";
import { useEffect } from "react";

export function ProgressSteps() {
  const { progress, setProgress } = useProgress()

  const totalSteps = 3;

  const { pathname } = useLocation();

  console.log(pathname)

  useEffect(() => {
    if (pathname === "/search-results") setProgress(1);
    if (pathname === "/seat-selection") setProgress(2);
    if (pathname === "/passenger-details") setProgress(3);
  }, [pathname])


  const progressPercentage = (progress / totalSteps) * 100;

  return (
    <div className="my-10 flex flex-col gap-4">
      <span>Paso {progress} de {totalSteps}</span>
      <div className="relative w-full h-3 bg-primary-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

