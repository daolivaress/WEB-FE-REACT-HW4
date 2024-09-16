import { motion } from "framer-motion";

function Organizational_identity() {
    return (
        <section id="organizational_identity" className="">
            <motion.h1 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1 }} className="font-bold text-2xl text-center mb-4">Identidad Organizacional</motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1, delay: 1 }} id="mission" className="mb-10">
                <h2 className="text-xl font-semibold">Misión</h2>
                <p>
                    Proveer a los gamers con los periféricos más avanzados y
                    ligeros del mercado, garantizando precisión, velocidad y un
                    rendimiento sin igual para competiciones de alto nivel.
                </p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 100}} transition={{ duration: 1, delay: 2 }} id="vision" className="mb-10">
                <h2 className="text-xl font-semibold">Visión</h2>
                <p>
                    Convertirnos en la marca líder en el mercado de periféricos
                    de gaming competitivo, ofreciendo productos innovadores que
                    respondan a las necesidades cambiantes de los jugadores
                    profesionales.
                </p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1, delay: 3 }} id="politic">
                <h2 className="text-xl font-semibold">Politicas</h2>
                <ol className="list-decimal ml-8">
                    <li>
                        <p>
                            Mantener una constante innovación tecnológica en
                            nuestros productos para garantizar la satisfacción
                            de nuestros usuarios.
                        </p>
                    </li>
                    <li>
                        <p>
                            Promover prácticas de responsabilidad social y
                            sostenibilidad en la producción de nuestros
                            periféricos.
                        </p>
                    </li>
                    <li>
                        <p>
                            Establecer relaciones duraderas con nuestros
                            clientes a través de un servicio al cliente de
                            calidad y respuestas rápidas a sus necesidades.
                        </p>
                    </li>
                </ol>
            </motion.div>
        </section>
    );
}

export default Organizational_identity;
