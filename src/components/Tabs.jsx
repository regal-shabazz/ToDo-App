export const Tabs = (props) => {
  const tabs = ["All", "Open", "Completed"];
  const { todos, selectedTab, setSelectedTab } = props;

  return (
    
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numberOfTasks = tab === "All" ? todos.length : tab === "Open" ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length 
        
        return (
          <button key={tabIndex} className={"tab-button " + (tab === selectedTab ? "tab-selected" : " ")}  onClick={() => {
             tab === "All" ? setSelectedTab('All') : tab === "Open" ? setSelectedTab('Open') : setSelectedTab('Completed')
          }}>
            {tab} <span>({numberOfTasks})</span>
          </button>
        );
      })}
      
    </nav>
  );
};
