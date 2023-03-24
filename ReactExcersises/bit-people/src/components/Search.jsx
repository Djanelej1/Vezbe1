import { HiSearch } from "react-icons/hi";

export const Search = ({ handleSearchNote }) => {
  return (
    <div>
      <HiSearch />
      <input
        type="text"
        style={{ width: "80%", margin: "5px" }}
        placeholder="Search Users"
        onChange={(event) => handleSearchNote(event.target.value)}
      ></input>
    </div>
  );
};
