import { useRouter } from "next/router";

const PageBanner = () => {
  const router = useRouter();
  const path = router.asPath.split("/");
  return (
    <div className="relative h-44 w-full bg-[url('../public/slide2.jpg')] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-[#142457]/60 flex items-center justify-center">
      <h3 className="text-4xl font-bold text-white z-10">
        {path[1].toUpperCase()}
      </h3>
    </div>
  );
};

export default PageBanner;