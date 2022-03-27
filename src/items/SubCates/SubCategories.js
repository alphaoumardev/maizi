import {Link,} from "react-router-dom";

const SubCategories = ({subcates})=>
{
    return(
        <ul>
            <li><Link to="products">{subcates?.type?.type_name}</Link></li>
        </ul>
    )
}
export default SubCategories
