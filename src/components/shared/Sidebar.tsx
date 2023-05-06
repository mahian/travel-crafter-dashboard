import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const menus = [
        {
            menu: "Add Package",
            icon: "fa-sharp fa-solid fa-circle-plus",
            route: "add-package"
        },
        {
            menu: "Packages",
            icon: "fa-sharp fa-solid fa-box-open",
            route: "all-packages"
        },
        {
            menu: "All Post",
            icon: "fa-sharp fa-solid fa-book",
            route: "all-post"
        },
        {
            menu: "Users",
            icon: "fa-sharp fa-solid fa-users",
            route: "all-users"
        },
    ]
    return (
        <div>
            <div className="mb-3 p-3">
                <Link to="/"><h3 className="fw-bold">Travel crafter</h3></Link>
            </div>
            <div className="list-group rounded-0">
                {
                    menus.map((menu, index) => (
                        <NavLink key={index} className="list-group-item list-group-item-action sidebar-menu" to={menu.route}>
                            <span className="me-3"><i className={menu.icon}></i></span>
                            {menu.menu}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;