import { useNavigate, Outlet } from 'react-router-dom'

export default function Homepage() {
// built-in hook in React Router DOM, returns a function

const navigate = useNavigate();
return (
    <>
<div className="Navigation componentBox">
<h1>Home Page</h1>
<button onClick={() => navigate('/bitcoin')}>
Bitcoin Rates</button>
<button onClick={() => navigate('/login')}>
Login</button>
</div>

<p>Welcome to the Homepage!</p>
</>
)
}
