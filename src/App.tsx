import { Homepage } from './components/Homepage';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4efe9] text-zinc-900">
      <main>
        <Homepage />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}