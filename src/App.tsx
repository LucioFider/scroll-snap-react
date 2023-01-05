import classNames from "classnames";
import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "./icons/chevron";

const slides = [
  {
    title: "One Tap Setup",
    img: "/slide-img/one-tap.jpeg",
    imageWidth: 343,
    imageHeight: 375,
  },
  {
    title: "Personalized Spatial Audio",
    img: "/slide-img/spatial-audio.jpeg",
    imageWidth: 211,
    imageHeight: 375,
  },
  {
    title: "Audio Sharing",
    img: "/slide-img/audio-sharing.jpeg",
    imageWidth: 265,
    imageHeight: 352,
    centered: true,
  },
  {
    title: "Automatic Switching",
    img: "/slide-img/automatic-switching.jpeg",
    imageWidth: 336,
    imageHeight: 100,
    centered: true,
  },
  {
    title: "Siri",
    img: "/slide-img/siri.jpeg",
    imageWidth: 168,
    imageHeight: 168,
    centered: true,
  },
  {
    title: "Accessibility",
    img: "/slide-img/a11y.jpeg",
    imageWidth: 135,
    imageHeight: 135,
    centered: true,
  },
];

function App() {
  return (
    <div className="bg-gray-200 min-h-screen font-sans py-16">
      <h2 className="font-semibold text-6xl text-center max-w-[800px] mx-auto">
        A magical connection to your devices
      </h2>
      <ul className="flex h-[500px] overflow-x-auto">
        {slides.map((slide) => (
          <li
            className="bg-white flex flex-col w-[400px] rounded-xl shrink-0 mr-5 last:mr-0"
            key={slide.title}
          >
            <div
              className={classNames(
                "flex h-full justify-center",
                slide.centered ? "items-center" : "items-start"
              )}
            >
              <img
                src={slide.img}
                alt={slide.title}
                width={slide.imageWidth}
                height={slide.imageHeight}
              />
            </div>
            <h3 className="mt-auto">{slide.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
