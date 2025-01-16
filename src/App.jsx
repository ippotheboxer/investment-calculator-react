import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Table from "./components/Table";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });

  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = formData;

    // Check if all inputs are filled
    if (initialInvestment && annualInvestment && expectedReturn && duration) {
      setTableData({
        initialInvestment: parseFloat(initialInvestment),
        annualInvestment: parseFloat(annualInvestment),
        expectedReturn: parseFloat(expectedReturn),
        duration: parseInt(duration, 10),
      });
    } else {
      setTableData(null); // Reset tableData if inputs are incomplete
    }
  }, [formData]);

  const inputIsValid = formData.duration >= 1;

  return (<>
    <Header />
    <InvestmentForm formData={formData} setFormData={setFormData}/>
    {!inputIsValid && <p className="center">Please enter valid data</p>}
    {tableData && <Table data={tableData} />}
    </>
  );
}

export default App;
