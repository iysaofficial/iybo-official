const HeaderComp = (props) => {
    return(
        <>
        <section className="header-section">
            <div className="header-content">
                <h2>{props.header}</h2>
            </div>
        </section>
        </>
    )
}

export default HeaderComp