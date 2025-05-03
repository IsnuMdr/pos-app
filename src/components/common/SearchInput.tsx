'use client';

type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="text-gray-800 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}
