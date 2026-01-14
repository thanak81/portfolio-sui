"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CookingAnimate() {
    return (
        <div style={{ width: "100%", maxWidth: 200 }}>
            <DotLottieReact
                src="/animation/spaceboy.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "auto", aspectRatio: "1 / 1" }}
            />
        </div>

    )

}

