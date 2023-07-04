import "./Sidebar.scss"

const Sidebar = ({menuOpen}) => {
    return(
        <aside class={`${menuOpen ? "menu-open" : "menu-closed"}`}>
            <p>Aside</p>
            <p>Aside</p>
            <p>Aside</p>
        </aside>
    )
}

export default Sidebar;