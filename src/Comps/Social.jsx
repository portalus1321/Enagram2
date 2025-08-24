import { useState, useEffect } from "react";

// SVG icon components
const GitHubIcon = () => (
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="28" height="28" viewBox="0 0 24 24" fill="0">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 93.06 93.06">
        <g>
            <g>
                <path d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184    C22.362,5.091,17.351,0.08,11.185,0.08z" />
                <rect x="1.538" y="30.926" width="19.287" height="62.054" />
                <path d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281    c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942    C93.06,42.235,89.455,29.383,69.925,29.383z" />
            </g>
        </g>
    </svg>
);

const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="0">
        <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19A4.92 4.92 0 0 0 16.67 3c-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13C7.69 8.87 4.07 7.13 1.64 4.15c-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.45 4.03 4.91-.42.11-.86.17-1.32.17-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.41 4.6 3.45A9.89 9.89 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.56z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/></svg>
);

const InstagramIcon = () => (
   <svg width="25px" height="25px" viewBox="0 0 667 668" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M473.667 0.666504H194.333C72.9998 0.666504 0.666504 72.9998 0.666504 194.333V473.333C0.666504 595 72.9998 667.333 194.333 667.333H473.333C594.666 667.333 667 595 667 473.667V194.333C667.333 72.9998 595 0.666504 473.667 0.666504ZM334 463.333C262.666 463.333 204.666 405.333 204.666 334C204.666 262.666 262.666 204.666 334 204.666C405.333 204.666 463.333 262.666 463.333 334C463.333 405.333 405.333 463.333 334 463.333Z" fill="#000000"/>
</svg>

);

export default function Social() {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/portalus1321",
            icon: <GitHubIcon />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/",
            icon: <LinkedInIcon />,
        },
        {
            name: "Twitter",
            url: "https://twitter.com/",
            icon: <TwitterIcon />,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/ironnuggetz",
            icon: <FacebookIcon />,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/",
            icon: <InstagramIcon />,
        },
  
        // Add more links if needed
    ];

    const [showMore, setShowMore] = useState(false);

    const maxVisible = 5;
    const visibleLinks = socialLinks.slice(0, maxVisible);
    const extraLinks = socialLinks.slice(maxVisible);

    return (
        <div className="">
            <ul className="flex flex-col items-center space-y-4">
                {visibleLinks.map((link, idx) => (
                    <li className="relative overflow-hidden" key={link.name}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center transition-all duration-200 w-[40px] h-[40px]
                                ${idx === 0
                                    ? "w-[40px] h-[40px] bg-emerald-400 text-white shadow-lg"
                                    : "w-[20px] h-[20px] bg-emerald-700 text-white shadow"
                                }
                                rounded-full hover:bg-indigo-500`}
                            style={{ fontSize: 0 }}
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
                {extraLinks.length > 0 && (
                    <li>
                        <button
                            className="w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-blue-500 relative"
                            onClick={() => setShowMore((v) => !v)}
                            aria-label="Show more social links"
                        >
                            <span className="flex flex-col justify-center items-center">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mb-0.5"></span>
                                <span className="w-1.5 h-1.5 bg-white rounded-full mb-0.5"></span>
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            </span>
                            {showMore && (
                                <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg px-4 py-2 flex space-x-3">
                                    {extraLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-500"
                                            title={link.name}
                                            style={{ fontSize: 0 }}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}