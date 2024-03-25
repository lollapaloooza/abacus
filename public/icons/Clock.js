export default function Clock({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "44"}
      height={height || "44"}
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.9431 3.66669C36.1562 3.66669 40.3307 8.02635 40.3307 14.5127V29.4874C40.3307 35.9737 36.1562 40.3334 29.9412 40.3334H14.0499C7.83673 40.3334 3.66406 35.9737 3.66406 29.4874V14.5127C3.66406 8.02635 7.83673 3.66669 14.0499 3.66669H29.9431ZM29.9431 6.41669H14.0499C9.41156 6.41669 6.41406 9.59385 6.41406 14.5127V29.4874C6.41406 34.4062 9.41156 37.5834 14.0499 37.5834H29.9412C34.5814 37.5834 37.5807 34.4062 37.5807 29.4874V14.5127C37.5807 9.59385 34.5832 6.41669 29.9431 6.41669ZM21.9957 12.62C22.7547 12.62 23.3707 13.236 23.3707 13.995V21.211L28.9184 24.5165C29.5692 24.907 29.7837 25.7503 29.3951 26.403C29.1366 26.8338 28.6801 27.074 28.2126 27.074C27.9724 27.074 27.7304 27.0116 27.5086 26.8815L21.2917 23.1726C20.8774 22.9233 20.6207 22.4741 20.6207 21.992V13.995C20.6207 13.236 21.2367 12.62 21.9957 12.62Z"
        fill="black"
      />
    </svg>
  );
}