import { AuthModal } from "./AuthModal";

export function Hero() {
  return (
    <section className='relative flex items-center justify-center'>
      <div className='relative items-center w-full py-12 lg:py-20'>
        <div className='text-center'>
          <span className='text-sm text-red-500 font-medium tracking-tight bg-red/10 px-4 py-2 rounded-full'>
            Introducing Schedly 1.0
          </span>

          <h1 className='mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none'>
            Scheduling made{" "}
            <span className='block text-red-500'>effortless!</span>
          </h1>

          <p className='max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground'>
            Scheduling a meeting doesn’t have to be complicated. With Schedly,
            we simplify the process, allowing you and your clients to book
            meetings with ease.
          </p>

          <div className=' mt-5 mb-12'>
            <AuthModal />
          </div>
        </div>
      </div>
    </section>
  );
}
