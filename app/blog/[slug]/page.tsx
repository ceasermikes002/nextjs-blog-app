import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import {PortableText} from '@portabletext/react'

async function getData(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      titleImage
  } [0]
  `;
  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-6">
      <h1>
        <span className="block text-base text-center text-blue-400 font-semibold tracking-wide uppercase">
          Ceaser&apos;s Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="img"
        className="rounded-lg mt-8 border"
        priority
      />
      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-blue-400">
        <PortableText value={data.content}/>
      </div>
    </div>
  );
};

export default page;
