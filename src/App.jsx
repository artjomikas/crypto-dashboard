import { Sidebar, Transactions, Assets, News, Dashboard, NFT} from ".";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/news" element={<News />} />
          <Route path="/nft" element={<NFT />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
