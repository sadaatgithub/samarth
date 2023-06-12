"use client"
import { useRouter } from "next/router";
import { EmailIcon, TwitterIcon ,TwitterShareButton,FacebookShareButton,FacebookIcon} from "react-share"

const basePath = "https://www.samarthaphysio.com/"

const SocialShare = () => {
  const router = useRouter();
  const curUrl = basePath + router.asPath


  return (
    <div className="flex gap-2">
     <TwitterShareButton url={`${curUrl}`}>
    <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <FacebookShareButton url={`${curUrl}`}>
      <FacebookIcon size={32} round={true}/>
    </FacebookShareButton>
    </div>
  )
}

export default SocialShare