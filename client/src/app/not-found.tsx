import Link from "next/link";
import Button from "./components/buttons/default-button";

export default function NotFound() {
  return (
    <div 
      className={"flex justify-center top-40"}
    >
      <Button 
        size={"xl"}
        color={"black"}
      >
        <Link 
          href="/post/free">NOT FOUND! RETURN HOME!
        </Link>
      </Button>
    </div>
  );
}
