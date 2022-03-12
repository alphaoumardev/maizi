import Banners from "../components/Banners";
import LargeBanner from "../components/LargeBanner";
import Category from "../components/Category";
import AllProducts from "../components/AllProducts";
import Owl from "../components/Owl";
const Home = ()=>
{
    return(
    <div>
        <Owl/>
        <Category/>
        <Banners/>
        <AllProducts/>
        <LargeBanner/>
    </div>

)
}
export default Home
