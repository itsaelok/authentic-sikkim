"use client";

import {
  MessageCircle,
  Send,
  Link2,
} from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

interface Props{
  title:string;
}

export default function SocialShare({
  title,
}:Props){

  const share=encodeURIComponent(title);

  const url=encodeURIComponent(window.location.href);

  function copy(){

    navigator.clipboard.writeText(window.location.href);

    alert("Link copied");

  }

  return(

    <section className="mt-12">

      <h3 className="text-xl font-bold mb-4">

        Share this article

      </h3>

      <div className="flex flex-wrap gap-4">

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="Facebook"
          className="rounded-full bg-blue-600 p-4 text-white"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${share}&url=${url}`}
          target="Twitter"
          className="rounded-full bg-black p-4 text-white"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href={`https://wa.me/?text=${share}%20${url}`}
          target="Whatsapp"
          className="rounded-full bg-green-600 p-4 text-white"
        >
          <MessageCircle/>
        </a>

        <a
          href={`https://t.me/share/url?url=${url}&text=${share}`}
          target="Telegram"
          className="rounded-full bg-sky-500 p-4 text-white"
        >
          <Send/>
        </a>

        <button
          onClick={copy}
          className="rounded-full bg-gray-700 p-4 text-white"
        >
          <Link2/>
        </button>

      </div>

    </section>

  );

}