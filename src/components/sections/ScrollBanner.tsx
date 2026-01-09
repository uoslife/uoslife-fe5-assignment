import { BannerBox } from '../banner/BannerBox'

export function ScrollBanner(){
    return (
        <BannerBox title="스크롤 배너">
        <div className="bannerViewport">
            <div className="bannerTrack">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div className="bannerItem" key={i} />
                ))}
            </div>
        </div>
        </BannerBox>
    )
}