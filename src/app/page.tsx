import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center flex-col gap-6">
      <span className="text-7xl font-semibold"> Next App Stater Kit</span>
      <Link href="https://aliiz.ir/" className="text-3xl text-gray-500">
        Develop by Ali Zare
      </Link>
    </div>
  );
}
