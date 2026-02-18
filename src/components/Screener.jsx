// Screener.jsx

import FilterPanel from './FilterPanel';
import StockTable from './StockTable';

function Screener() {
    return (
        <div>
            <FilterPanel />
            <StockTable />
        </div>
    );
}

export default Screener;