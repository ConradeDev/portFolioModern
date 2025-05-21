interface TitleProp {
    title: string
}

const Title=({title}: TitleProp)=>{
    return (
        <h1 className="uppercase font-bold text-center scroll-animation">
            {title} 
        </h1>
    )
}
export default Title;