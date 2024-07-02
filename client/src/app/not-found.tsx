import Link from "next/link";
import Button from "./components/common/Button";

export default function NotFound() {
  return (
    <div className="flex justify-center top-40">
      <Button size="xl" color="black">
        <Link href="/home/free">NOT FOUND! RETURN HOME!</Link>
      </Button>
    </div>
  );
}
