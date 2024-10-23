"use client";
import Link from 'next/link';

export default function FooterBtns({role, onClick, link}) {
    if (link) {
        return (
          <Link href={link}>
            <button type="button">{role}</button>
          </Link>
        );
      }
    

    return(
            <button type="button" onClick={onClick}>{role}</button>
    )

}
