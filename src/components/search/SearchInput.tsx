import { useState, type ChangeEvent, type FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import "./SearchInput.css";

const SearchInput: FC = () => {
  const [input, setInput] = useState<string>("");
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  const clearInputHandler = () => setInput("");
  return (
    <div className="search">
      <div className="search-wrapper">
        <input type="text" placeholder="Search..." value={input} onChange={changeHandler} />
        {input && <MdClose className="search__clear_btn" onClick={clearInputHandler} />}
      </div>
      <FaMagnifyingGlass className="search__magnify" />
    </div>
  );
};

export default SearchInput;
