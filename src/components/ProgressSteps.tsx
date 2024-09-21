type ProgressStepsProps = {
  currentStep: 1 | 2 | 3
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="my-10 flex flex-col gap-4">
      <span>Paso {currentStep} de {totalSteps}</span>
      <div className="relative w-full h-3 bg-primary-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

