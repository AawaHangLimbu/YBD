import "./Gallery.css";

export default function Gallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((photo, i) => (
        <figure
          className="polaroid"
          key={photo.id}
          style={{
            "--rotate": `${photo.rotate}deg`,
            "--delay": `${i * 0.15}s`,
          }}
        >
          <img src={photo.src} alt={photo.caption} loading="lazy" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
