import Particles from "../components/Particles";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#a5a5a5] to-[#d5d5d5] text-[#4B5462] relative overflow-hidden">
      <Particles quantity={100} />
      <main className="pt-20 mt-5 relative">
        <Header />
        <Profile />
      </main>
    </div>
  );
}