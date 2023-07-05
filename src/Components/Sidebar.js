import "./Sidebar.scss"

const Sidebar = ({menuOpen}) => {
    return(
        <aside class={`${menuOpen ? "menu-open" : "menu-closed"}`}>
            <div className="content">
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
        </div>
        </aside>
    )
}

export default Sidebar;