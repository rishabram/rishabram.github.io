const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Text Container */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-primary">Rishab</span>
                    </h1>

                    <div className="mb-8">
                        <p className="text-xl md:text-2xl text-gray-600">
                            Founder & Computer Science Student
                        </p>
                        <p className="mt-4 text-lg max-w-2xl mx-auto md:mx-0">
                            Passionate about building impactful software and sustainable solutions
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sky-600 transition duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="Updated_Resume_Rishab (4).pdf"
                            download
                            className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-sky-50 transition duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;