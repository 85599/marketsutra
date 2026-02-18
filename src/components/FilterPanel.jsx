import React from 'react';

const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <h2>Advanced Filtering Options</h2>
            <form>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category">
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priceRange">Price Range:</label>
                    <input type="range" id="priceRange" min="0" max="1000" />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" min="1" max="5" />
                </div>
                <div>
                    <button type="submit">Apply Filters</button>
                </div>
            </form>
        </div>
    );
};

export default FilterPanel;