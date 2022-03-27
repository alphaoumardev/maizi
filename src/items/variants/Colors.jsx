const Colors =({variant})=>
{
    return(
        <div className="color-input">
            <label htmlFor="yellow" style={{backgroundColor: variant?.color?.color_name}} />
            <input type="radio" className="d-none" id="yellow" />
            <span>{variant?.color?.color_name}</span>
        </div>
    )
}
export default Colors
