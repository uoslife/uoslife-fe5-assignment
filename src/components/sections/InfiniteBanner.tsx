import { BannerBox } from '../banner/BannerBox'

export function InfiniteBanner() {
    return (
        <BannerBox title="무한 배너">
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