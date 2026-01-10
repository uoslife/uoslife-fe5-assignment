import shortcutIcon from "../../assets/shortcut-icon.png"

export function HomeBanner({ bgImage }: { bgImage: string }){
    return (
        <section
            className="homeBanner"
            style={{ backgroundImage: `url(${bgImage})`}}
        >
            <div className="homeBannerContent">
                <h1 className="homeBannerTitle">차곡차곡 채우는 블로그 ✍️</h1>
                <a
                    href="https://blog.naver.com/chaeright"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homeBannerButton"
                >
                    <img
                        src={shortcutIcon}
                        alt="바로가기"
                        className="shortcutIcon"
                    />
                    <span>바로가기</span>
                </a>
            </div>
        </section>
    )
}