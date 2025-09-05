export default function LCheckbox() {
  return (
    <div className="relative w-full ml-0 mt-[10px] md:ml-[10px] md:mt-0 md:w-auto ">
      <legend className="sr-only relative">Notifications</legend>
      <div className="space-y-5 backdrop:">

        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-0"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
              ფორმატის შენარჩუნება
            </label>{' '}
           
          </div>
        </div>

      </div>
    </div>
  )
}