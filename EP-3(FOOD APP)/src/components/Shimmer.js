function Shimmer() {
  const numberOfCards = 12;
  return (
    <div className="shimmer-container">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  );
}

export default Shimmer;
