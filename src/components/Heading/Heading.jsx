import s from './Heading.module.css'

export default function Heading ({text}) {
 return   <h1 className={s.heading}>{text}</h1>
}