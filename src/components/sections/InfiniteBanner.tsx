import { BannerBox } from '../banner/BannerBox'
import { MARU_IMAGES } from "../../constants/maruImages"

export function InfiniteBanner() {
    return (
        <BannerBox title="무한 배너">
            <div className="bannerViewport">
                <div className="bannerTrack">
                    {MARU_IMAGES.map((src, i) => (
                        <div className="bannerItem" key={i}>
                            <img className="bannerImg" src={src} alt={`maru-${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </BannerBox>
    )
}