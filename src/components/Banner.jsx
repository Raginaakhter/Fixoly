

const Banner = () => {
    return (
        <div className="mt-0.5">
           <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/PZgp1WD0/stock-vector-smartphone-repair-line-icon-neon-laser-lights-phone-recovery-sign-mobile-device-symbol.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Fast & Reliable Mobile Repair </h1>
      <h3 className="mb-5">
       Is your phone screen cracked? Battery draining fast? No worries! Our expert technicians are ready to fix all types of mobile issues — right at your home or office.
      </h3>
      <button className="btn btn- bg-cyan-700 text-amber-50">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;