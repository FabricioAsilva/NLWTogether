import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss';

type BruttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: BruttonProps){
    return(
        <button className="button" {...props} />
    )
}