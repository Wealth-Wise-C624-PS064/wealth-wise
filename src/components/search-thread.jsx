import { Input } from "./ui/input";

export default function SearchThread() {
  return (
    <div>
      <Input
        type="text"
        className="w-full"
        placeholder="Cari judul diskusi..."
      />
    </div>
  );
}
