import Link from "next/link";
import { useRouter } from "next/router";

const PageBanner = () => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const title = path[1].split("-").join(" ")
  const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div className="relative h-24 md:h-56  w-full bg-[url('../public/banner3.jpg')] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-[#142457]/60 flex items-center justify-center">
      <h3 className="text-xl md:text-4xl font-bold text-white z-10 ">
      <Link href="/"> Home</Link> - {capitalTitle}
      </h3>
    </div>
  );
};
export default PageBanner;
