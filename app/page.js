import Image from "next/image";

export default function Home() {
 return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="relative w-32 h-32">
            <Image
              src={`/images/image${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
              className="square"
            />
            <button className="absolute inset-0 bg-transparent text-black flex items-center justify-center w-32 h-32">
              
            </button>
          </div>
        ))}
      </div>
    </main>
 );
}

