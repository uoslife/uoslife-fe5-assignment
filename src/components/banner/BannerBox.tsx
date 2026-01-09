type BannerBoxProps = {
    title: string
    children: React.ReactNode
}

export function BannerBox({ title, children }: BannerBoxProps) {
    return (
        <section className="bannerBox">
        <div className="bannerBoxHeader">
            <h2 className="bannerTitle">{title}</h2>
        </div>

        {children}
        </section>
    )
}
