export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <p className="text-lg text-gray-700 mb-6">
                            Hey, my name is Rishab Ramalingam and I'm a computer science student
                            at the University of Utah currently pursuing an Honors Computer Science Degree.
                        </p>

                        {/* Add more about yourself here */}
                        <p className="text-lg text-gray-700 mb-6">
                            I'm passionate about creating innovative solutions and building
                            software that makes a real impact in people's lives.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                Computer Science
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                University of Utah
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                Honors Program
                            </span>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex justify-center">
                        <img
                            src="/DSCO8157.jpg"
                            alt="Rishab Ramalingam"
                            className="w-64 h-64 rounded-full object-cover shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}