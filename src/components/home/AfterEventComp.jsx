const AfterEventComp = () =>{
    return(
        <>
        <section className="after-event-section">
            <div className="after-event-container">
                <div className="heading-after-event">
                    <h1>After Movie 2024</h1>
                </div>
                <div className="after-event-video text-center">
                    {/* <iframe className="mt-5"  width="50%" height="315" src="https://youtu.be/FhIGkP87BZ4?si=qHIEsqtPOX9JwOhM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                    <iframe className="mt-5"  width="50%" height="315" src="https://www.youtube.com/embed/FhIGkP87BZ4?si=mLY-kev9KOW-9iaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        </>
    )
}

export default AfterEventComp