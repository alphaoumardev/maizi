const Sizes =({variant})=>
{
    return(
        <>
            {/*<div className="single-product-component mt-15">*/}
            {/*    <div className="size">*/}
                    <label htmlFor="l">{variant?.size?.size_name}</label>
                    <input type="radio" className="d-none" id="l" />
                {/*</div>*/}
            {/*</div>*/}
        </>
    )
}
export default Sizes
