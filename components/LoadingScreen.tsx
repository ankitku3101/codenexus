export default function LoadingScreen() {
    return (
      <div
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
        className="bg-center h-screen w-full flex items-center justify-center bg-[#090715] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      >
      </div>
    );
  }
  