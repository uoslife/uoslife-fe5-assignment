export function HomeBanner({ bgImage }: { bgImage: string }){
    return (
        <section
            className="homeBanner"
            style={{ backgroundImage: `url(${bgImage})`}}
        >
        </section>
    )
}