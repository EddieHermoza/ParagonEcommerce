'use client'

import React, { HTMLAttributes } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

type LinkTransitionProps = HTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

function LinkTransition({ href, children, ...rest }: LinkTransitionProps) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      return;
    } else {
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

export default LinkTransition;