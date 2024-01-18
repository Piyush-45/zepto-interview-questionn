import { useState } from "react";
import "./index.css"; // Import the CSS file for styling

const ItemList = () => {
    const user_array = ["Alice", "Alise", "Bob", "Charlie", "champion", "David", "Eva", "Frank", "Grace", "Henry"];

    const [showList, setShowList] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [chipData, setChipData] = useState([]);

    const filteredItems = user_array.filter((item) =>
        !chipData.includes(item) && item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addToChip = (selectedItem) => {
        setChipData([...chipData, selectedItem])
        setSearchQuery('')
    }

    const removeFromChip = (selectedChip) => {
        setChipData(chipData.filter((item) => item !== selectedChip))
    }

    return (
        <div className="item-list-container">
            <div className="chipInputContainer">
                <div className="chip-container">
                    {chipData.map((chip, index) => (
                        <div key={index} className="chip">
                            {chip} <span onClick={() => removeFromChip(chip)}>X</span>
                        </div>
                    ))}
                </div>
                <input
                    className="search-input"
                    onFocus={() => setShowList(true)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
            </div>

            {showList && (
                <ul className="suggestion-list">
                    {filteredItems.map((item, index) => (
                        <li key={index} onClick={() => addToChip(item)}>{item}</li>
                    ))}
                </ul>
            )}


        </div>
    )
}

export default ItemList;
