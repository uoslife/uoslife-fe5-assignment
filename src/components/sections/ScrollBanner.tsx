import { BannerBox } from '../banner/BannerBox'
import { MARU_IMAGES } from "../../constants/maruImages"

export function ScrollBanner(){
    return (
        <BannerBox title="스크롤 배너">
        <div className="bannerViewport">
            <div className="bannerTrack">
                {MARU_IMAGES.map((src, i) => (
                    <div className="bannerItem" key={i}>
                    <img
                        className="bannerImg"
                        src={src}
                        alt={`maru-${i + 1}`}
                    />
                    </div>
                ))}
            </div>
        </div>
        </BannerBox>
    )
}