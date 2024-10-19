import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Landing Page</div>
      <div className="flex flex-col justify-center items-center m-4">
        <Link className="text-3xl underline" href="/products">
          All Products
        </Link>
      </div>
    </>
  );
}
