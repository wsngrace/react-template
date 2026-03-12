export default function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">
            About Our Company
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            We build modern digital solutions that help businesses grow
            and succeed in a fast-changing world.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          {/* Card Effect */}
          <div className="
            overflow-hidden
            rounded-xl
            shadow-md
            transition-all duration-500
          ">
            <div className="
                p-8
                w-full
                h-[350px]
                relative
                transition-all duration-300
            ">
              <div id="flip-outside" className="absolute awesome">
                Make Sure
                <div id="flip" className="h-[45px] overflow-hidden">
                  <div><div>Everything</div></div>
                  <div><div>LifeStyle</div></div>
                  <div><div>Duty</div></div>
                </div>
                Amazing!!
              </div>
            </div>
          </div>

          {/* Text Card */}
          <div className="
            p-8
            rounded-xl
            bg-white
            shadow-sm
            transition-all duration-300
            hover:shadow-xl
            hover:-translate-y-2
          ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Story
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a passion for innovation, we deliver modern
              web solutions using React and scalable technologies.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our goal is to transform ideas into reliable and elegant
              digital experiences.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold text-gray-900">
            Our Core Values
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">

            {["Innovation", "Quality", "Trust"].map((value) => (
              <div
                key={value}
                className="
                  group
                  p-8
                  bg-white
                  rounded-xl
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  cursor-pointer
                "
              >
                <h4 className="font-semibold text-gray-800 group-hover:text-black">
                  {value}
                </h4>

                <p className="mt-2 text-gray-600">
                  We focus on delivering meaningful results through
                  modern technology and collaboration.
                </p>

                {/* underline effect */}
                <div className="
                  mt-4 h-1 w-0 bg-black
                  transition-all duration-300
                  group-hover:w-12
                "></div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}