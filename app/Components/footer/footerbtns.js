"use client";

export default function FooterBtns({role, onClick}) {

    return(
            <button type="button" onClick={onClick}>{role}</button>
    )

}
