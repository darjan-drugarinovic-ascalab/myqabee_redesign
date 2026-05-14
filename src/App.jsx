import { useState } from "react";
import TestCases from "./TestCases";
import TestCycles from "./TestCycles";
import TestCasesImage from "./TestCasesImage";
import TestCyclesImage from "./TestCyclesImage";

function App() {
  const [page, setPage] = useState("test-cases");

  if (page === "test-cycles") {
    return <TestCycles onNavigate={setPage} current={page} />;
  } else if (page === "test-cases-img") {
    return <TestCasesImage onNavigate={setPage} current={page} />;
  } else if (page === "test-cycles-img") {
    return <TestCyclesImage onNavigate={setPage} current={page} />;
  } else {
    return <TestCases onNavigate={setPage} current={page} />;
  }
}

export default App;
