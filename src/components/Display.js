const Display = ({gif}) => {
    return gif.data ?(
        <div className='gifDisplay'>
            <img src={gif.data.images.original.url}></img>
        </div>
    ):
    (<h1>nothing to display</h1>)
}
export default Display