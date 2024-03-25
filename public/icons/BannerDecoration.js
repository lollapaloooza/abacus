export default function BannerDecoration({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "72"}
      height={height || "72"}
      viewBox="0 0 72 72"
      fill="none"
    >
      <path
        d="M17.3516 -2.85188e-06L54.6866 -6.11581e-06C64.2482 -6.95171e-06 72 7.75175 72 17.3133L72 54.6484C72 70.076 53.3451 77.8025 42.442 66.8931L5.10695 29.558C-5.80249 18.6549 1.92396 -1.50315e-06 17.3516 -2.85188e-06Z"
        fill="#E22A34"
      />
    </svg>
  );
}
