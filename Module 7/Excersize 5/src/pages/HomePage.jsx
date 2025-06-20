import { useNavigate, Outlet } from 'react-router-dom'
import MediaCard from '../components/Cards';

export default function Homepage() {
// built-in hook in React Router DOM, returns a function

const navigate = useNavigate();
return (
<>
<div className="Navigation componentBox"> </div>
<h1>Home Page</h1>
<p>This is my Homepage!</p>

<div className='MediaCard'>
<MediaCard />
</div>
</>
)
}
