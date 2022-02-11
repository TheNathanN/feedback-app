import FilterDropdown from "./ui/FilterDropdown";
import BasicDropdown from "./ui/BasicDropdown";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <FilterDropdown />
      <BasicDropdown list={["Feature", "Feature 2"]} />
    </div>
  );
};

export default App;
