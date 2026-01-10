import { useRef } from "react";
import { BannerBox } from "../banner/BannerBox";
import { MARU_IMAGES } from "../../constants/maruImages";

export function ScrollBanner() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const goFirst = () => {
        const root = scrollRef.current;
        if (!root) return;
        const first = root.querySelector<HTMLElement>("[data-item='0']");
        first?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    const goLast = () => {
        const root = scrollRef.current;
        if (!root) return;
        const lastIndex = MARU_IMAGES.length - 1;
        const last = root.querySelector<HTMLElement>(`[data-item='${lastIndex}']`);
        last?.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
    };

    return (
        <BannerBox title="스크롤 배너">
            <div className="bannerViewport">
                <button
                    type="button"
                    className="bannerArrow bannerArrowLeft"
                    aria-label="맨 처음으로"
                    onClick={goFirst}
                >
                    ‹
                </button>

                <div className="bannerScroll" ref={scrollRef}>
                    <div className="bannerTrack">
                        {MARU_IMAGES.map((src, i) => (
                        <div className="bannerItem" key={i} data-item={i}>
                            <img className="bannerImg" src={src} alt={`maru-${i + 1}`} />
                        </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="bannerArrow bannerArrowRight"
                    aria-label="맨 마지막으로"
                    onClick={goLast}
                >
                    ›
                </button>
            </div>
        </BannerBox>
    );
}