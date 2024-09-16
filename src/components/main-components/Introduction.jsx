import { motion } from "framer-motion";

function Introduction() {
    return (
        <section id="introduction" className="mt-10 mx-10 md:mx-40">
            <div className="flex flex-col flex-wrap">
                <motion.h1 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1 }} className="font-semibold text-3xl text-center">Introduccion</motion.h1>
                <motion.h2 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1 }} className="text-xl font-semibold text-center mb-2">
                    Estrategia de Venta del Logitech G Pro Superlight
                </motion.h2>
                <motion.p whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 200}} transition={{ duration: 1.2, delay: 1 }} className="text-center">
                    En este plan estratégico, nos enfocamos en la
                    comercialización del mouse Logitech G Pro Superlight, uno de
                    los productos más avanzados en el mercado de accesorios para
                    gaming. Analizaremos los factores internos y externos que
                    afectan su desempeño en el mercado mediante un análisis
                    DOFA, definiremos la identidad organizacional y
                    estableceremos objetivos estratégicos que garanticen el
                    éxito en la venta de este producto.
                </motion.p>
            </div>
        </section>
    );
}

export default Introduction;
