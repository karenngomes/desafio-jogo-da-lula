export const Header = ({ setName }: { setName: (name: string) => void }) => {
  return (
    <div>
      <button onClick={() => setName("light")}>Light </button>
      <button onClick={() => setName("dark")}> Dark </button>
    </div>
  );
};
