import { DOFA } from "../../constants/data";
import { motion } from "framer-motion"


function Actual_diagnostic() {
    return (
        <section id="actual_diagnostic" className="my-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 100}} transition={{ duration: 1 }} className="font-semibold text-3xl text-center mb-10">
                Diagnostico Actual
            </motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1, delay: 1 }} className="grid grid-cols-1 grid-rows-4 gap-8 lg:grid-cols-2 lg:grid-rows-2">
                {DOFA.map((category) => (
                    <div key={category.id} className="flex antialiased flex-col justify-center border-2 border-white p-8 rounded-md transition-all hover:backdrop-blur-xl hover:scale-105">
                        <h2 className="text-center text-xl font-semibold mb-2">
                            {category.type}
                        </h2>
                        <ol className="list-decimal">
                            {category.items.map((item) => (
                                <li className="ml-8" key={item.id}>
                                    <span className="font-semibold">
                                        {item.title}:{" "}
                                    </span>
                                    {item.description}
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default Actual_diagnostic;
