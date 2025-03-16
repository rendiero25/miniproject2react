const Nav = ({linkToNav}) => {
    return(
        <section className="flex flex-row">
            {linkToNav.map((item, index) => (
                <div key={index} className="xl:mx-4 xl:font-medium 3xl:text-md">
                    <a href={item.href}>{item.label}</a>
                </div>
            ))}
        </section>
    )
}

export default Nav;