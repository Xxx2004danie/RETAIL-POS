export default function Button({ className, children ,onGet}) {
    return (
      <button className={className} onClick={onGet}>
        {children}
      </button>
    );
}