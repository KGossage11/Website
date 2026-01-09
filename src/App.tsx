import { Homepage } from './components/Homepage';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Homepage />
      <main>
        {/* <Homepage /> */}
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}