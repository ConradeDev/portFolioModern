interface TitleProp {
    title: string
}

const Title=({title}: TitleProp)=>{
    return (
        <h1 className="uppercase font-bold text-center ">
            {title} 
        </h1>
    )
}
export default Title;