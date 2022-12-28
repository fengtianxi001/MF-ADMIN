import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css

type StepsType = {
  element: string;
  popover: {
    title: string;
    description: string;
    position: string;
  };
};

function useGuide(steps: StepsType[]) {
  const driver = new Driver({
    animate: false,
    allowClose: false,
    padding: 0,
    className: "scoped-class",
    opacity: 0.75,
    overlayClickNext: true,
    doneBtnText: "完成",
    closeBtnText: "关闭",
    nextBtnText: "下一步",
    prevBtnText: "上一步",
    // showButtons: false,
  });

  const guideStart = () => {
    driver.defineSteps(steps);
    driver.start();
  };
  return { guideStart };
}

export default useGuide;
