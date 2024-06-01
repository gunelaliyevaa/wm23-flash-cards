import React, {useState} from 'react';

export default function SearchAndFilterForm({onSearch, selectedStatus, onFilterChange}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-form">
            <label className="label" htmlFor="searchInput">
                Search Term:
            </label>
            <input
                type="text"
                placeholder="Enter a Term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="action-btn" onClick={handleSearch}>Search</button>

            <label className="label" htmlFor="statusFilter">
                Filter by Status:
            </label>
            <div className="filter-form">
                <select
                    className="input-field"
                    value={selectedStatus || ''}
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Learned">Learned</option>
                    <option value="Want to Learn">Want to Learn</option>
                    <option value="Noted">Noted</option>

                </select>
            </div>
        </div>
    );
};
