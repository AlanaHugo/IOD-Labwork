import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import BitcoinPage from '../pages/BitcoinPage';
import PageNotFound from '../pages/PageNotFound';

function AppRoutes(props) {

return (

<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />

{/* nested routes, matches on /login, /bitcoin */}
<Route path="login" element={<LoginPage {...props} />}/>
<Route path="bitcoin" element={<BitcoinPage {...props} />}/>

{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />
</Routes>

)
}

export default AppRoutes;
