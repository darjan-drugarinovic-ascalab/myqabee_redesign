import SideNavBar from "./SideNavBar";

export const TestCasesImage = ({ current, onNavigate }) => {
  return (
    <div className="flex h-screen">
      <SideNavBar current={current} onNavigate={onNavigate} />
      <div className="flex-1 ml-[240px] overflow-auto bg-surface-container-low p-stack-md">
        <img src="/test-cases.png" alt="Test Cases" className="block max-w-full h-auto mx-auto" />
      </div>
    </div>
  );
};

export default TestCasesImage;
