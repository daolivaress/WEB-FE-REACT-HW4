import { Strategic_objectives } from "../../constants/data";
import { motion } from "framer-motion";

function StrategicObjectives() {
    const getStatus = (compliance) => {
        if (compliance >= 76 && compliance <= 100) {
            return "Exitoso";
        } else if (compliance >= 0 && compliance <= 35) {
            return "Critico";
        } else if (compliance >= 36 && compliance <= 75) {
            return "Aceptable";
        } else {
            return "No Iniciado";
        }
    };

    const getStyle = (status) => {
        if (status === "Exitoso") {
            return "text-green-500 font-medium bg-green-100 rounded-md";
        } else if (status === "Critico") {
            return "text-red-500 font-medium bg-red-100 rounded-md";
        } else if (status === "Aceptable") {
            return "text-yellow-500 font-medium bg-yellow-100 rounded-md";
        } else {
            return "text-gray-500 font-medium bg-gray-100 rounded-md";
        }
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
        });
    };

    return (
        <section id="strategic_objectives">
            <motion.h1 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 100}} transition={{ duration: 1 }} className="font-bold text-2xl text-center mt-20 mb-6">
                Objetivos Estrategicos
            </motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{ duration: 1, delay: 1 }} className="overflow-x-auto">
                <table className="max-w-full text-center border-collapse overflow-hidden rounded-md">
                    <thead className="bg-[#131313] text-white text-sm md:text-base">
                        <tr>
                            <th className="px-4 py-2 border-b border-r">Codigo</th>
                            <th className="px-4 py-2 border-b border-r">Objetivo</th>
                            <th className="px-4 py-2 border-b border-r">Meta</th>
                            <th className="px-4 py-2 border-b border-r">Avance</th>
                            <th className="px-4 py-2 border-b border-r">Cumplimiento</th>
                            <th className="px-4 py-2 border-b">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-base">
                        {Strategic_objectives.map((objective, index) => {
                            const isFirst = index === 0;
                            const isLast = index === Strategic_objectives.length - 1;

                            return (
                                <tr
                                    key={objective.id}
                                    className="hover:bg-white hover:text-[#131313]"
                                >
                                    <td className="px-4 py-2 border-b">
                                        {objective.id}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {objective.goal}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {isFirst || isLast
                                            ? formatCurrency(objective.target)
                                            : objective.target}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {isFirst || isLast
                                            ? formatCurrency(objective.progress)
                                            : objective.progress}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {objective.compliance}%
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        <div
                                            className={`px-2 py-1 rounded ${getStyle(
                                                getStatus(objective.compliance)
                                            )}`}
                                        >
                                            {getStatus(objective.compliance)}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </motion.div>
        </section>
    );
}

export default StrategicObjectives;