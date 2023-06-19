import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [colors, setColors] = useState([]);
  const generateColors = () => {};
  return (
    <main>
      <Form />
      <ColorList generateColors={generateColors} />
    </main>
  );
};
export default App;
