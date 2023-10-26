import { ReactNode } from "react";
import type { Authors } from "contentlayer/generated";
import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, email, linkedin, github } = content;

  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col items-center space-x-2 pt-20">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={250}
              height={250}
              className="rounded-full"
            />
          )}
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
          </div>
        </div>
        <div className="prose max-w-none pb-8 pt-20 dark:prose-invert xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  );
}
