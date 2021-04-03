const FormStepper = () => {
  return (
    <div className="w-full py-6 form-stepper">
      <div className="flex">
        <div className="w-1/6">
          <span class="text-xs text-center md:text-base mb-2">Step 1</span>
          <div className="relative">
            <div className="w-10 h-10 mx-auto rounded-full bg-green-800 flex items-center"></div>
          </div>
        </div>

        <div className="w-1/6">
          <span class="text-xs text-center md:text-base mb-2">Step 2</span>
          <div className="relative">
            <div
              className="absolute flex items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div class="w-full bg-gray-600 rounded items-center align-middle flex-1">
                <div class="w-0 bg-green-300 py-1 rounded"></div>
              </div>
            </div>
            <div className="w-10 h-10 mx-auto rounded-full bg-green-800 flex items-center"></div>
          </div>
        </div>

        <div className="w-1/6">
          <span class="text-xs text-center md:text-base mb-2">Step 3</span>
          <div className="relative">
            <div
              className="absolute flex items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div class="w-full bg-gray-600 rounded items-center align-middle flex-1">
                <div class="w-0 bg-green-300 py-1 rounded"></div>
              </div>
            </div>
            <div className="w-10 h-10 mx-auto rounded-full bg-green-800 flex items-center"></div>
          </div>
        </div>

        <div className="w-1/6">
        <span class="text-xs text-center md:text-base mb-2">Step 4</span>
            <div className="relative">
              <div className="absolute flex items-center content-center" style={{ width: "calc(100% - 2.5rem)", top: "50%", transform: "translate(-50%, -50%)" }}>
                  <div className="w-full bg-gray-800 rounded items-center flex-1">
                  <div class="w-0 bg-green-300 py-1 rounded"></div>
                  </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-800 mx-auto"></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FormStepper;
