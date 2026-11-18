function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      点了 {count} 次
    </button>
  );
}
export default MyButton
