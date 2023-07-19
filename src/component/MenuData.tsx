import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const  MenuData=[
    {
        title:"Home",
        path:"/",
        icon:<HomeIcon/>
    },
    {
        title:"Member",
        path:"/member",
        icon:<PersonIcon/>
    },
    {
        title:"Shop",
        path:"/shop",
        icon:<ShoppingCartIcon/>
    },
    {
        title:"Admin",
        path:"/admin",
        icon:<AdminPanelSettingsIcon/>
    }
]

export default MenuData;