import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { Zap } from "lucide-react";
interface SectionTitleProps {
    preTitle?: string;
    title?: string;
    description?: string;
}
const SectionTitle = ({ title, description, preTitle }: SectionTitleProps) => {

    return (<>
        <div className="text-center py-10 md:py-20">
            {preTitle && (
                <motion.span
                    className="font-medium mb-2 flex items-center justify-center gap-2 text-muted-foreground"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Zap className="w-4 h-4" />
                    {preTitle}
                </motion.span>
            )}
            {title && <h1 className="pb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary">{title}</h1>}
            {description && (
                <h3 className=" mt-2 text-base text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </h3>
            )}
        </div>
    </>)
}

export default SectionTitle;