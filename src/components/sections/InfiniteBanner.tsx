import { BannerBox } from '../banner/BannerBox'
import { MARU_IMAGES } from "../../constants/maruImages"

export function InfiniteBanner() {
    const loopImages = [...MARU_IMAGES, ...MARU_IMAGES]

    return (
        <BannerBox title="무한 배너">
            <div className="bannerViewport infiniteViewport">
                <div className="bannerTrack infiniteTrack">
                    {loopImages.map((src, i) => (
                        <div className="bannerItem" key={i}>
                            <img className="bannerImg" src={src} alt={`maru-${(i % 7) + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </BannerBox>
    )
}